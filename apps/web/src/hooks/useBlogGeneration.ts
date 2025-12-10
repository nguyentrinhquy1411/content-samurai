import { useCallback, useEffect, useRef, useState } from "react";
import { getCreateBlogUrl, getStreamUrl } from "@/lib/config";

interface StreamData {
  chunk?: string;
  done?: boolean;
  error?: string;
}

interface BlogGenerationState {
  topic: string;
  content: string;
  isGenerating: boolean;
  jobId: string | null;
  error: string | null;
  progress: number;
  estimatedTime: number;
  connectionStatus: "idle" | "connected" | "disconnected" | "reconnecting";
}

export function useBlogGeneration() {
  const [state, setState] = useState<BlogGenerationState>({
    topic: "",
    content: "",
    isGenerating: false,
    jobId: null,
    error: null,
    progress: 0,
    estimatedTime: 60,
    connectionStatus: "idle",
  });

  const eventSourceRef = useRef<EventSource | null>(null);
  const startTimeRef = useRef<number>(0);
  const retryCountRef = useRef<number>(0);
  const maxRetries = 3;

  const setTopic = useCallback((topic: string) => {
    setState((prev) => ({ ...prev, topic }));
  }, []);

  // Auto-update progress every 500ms
  useEffect(() => {
    if (!state.isGenerating) return;

    const updateProgress = () => {
      setState((prev) => {
        if (!prev.isGenerating) return prev;

        const elapsed = Date.now() - startTimeRef.current;
        const estimatedTotal = prev.estimatedTime * 1000;
        const calculatedProgress = Math.min(
          (elapsed / estimatedTotal) * 100,
          95,
        );

        return {
          ...prev,
          progress: Math.max(prev.progress, calculatedProgress),
        };
      });
    };

    const interval = setInterval(updateProgress, 500);
    return () => clearInterval(interval);
  }, [state.isGenerating]);

  const connectToStream = useCallback((jobId: string) => {
    const streamUrl = getStreamUrl(jobId);
    console.log("Connecting to stream:", streamUrl);

    const eventSource = new EventSource(streamUrl);
    eventSourceRef.current = eventSource;

    eventSource.onopen = () => {
      console.log("SSE connection opened");
      setState((prev) => ({
        ...prev,
        connectionStatus: "connected",
      }));
      retryCountRef.current = 0;
    };

    eventSource.onmessage = (event) => {
      try {
        if (!event.data || event.data.trim() === "") {
          return;
        }

        const data: StreamData = JSON.parse(event.data);
        console.log("Received SSE data:", data);

        if (data.done) {
          console.log("Stream completed");
          setState((prev) => ({
            ...prev,
            isGenerating: false,
            progress: 100,
            connectionStatus: "idle",
          }));
          eventSource.close();
        } else if (data.error) {
          console.error("Stream error:", data.error);
          setState((prev) => ({
            ...prev,
            error: data.error || "Unknown error occurred",
            isGenerating: false,
            connectionStatus: "disconnected",
          }));
          eventSource.close();
        } else if (data.chunk) {
          setState((prev) => ({
            ...prev,
            content: prev.content + data.chunk,
            progress: Math.min(prev.progress + 1, 95),
          }));
        }
      } catch (err) {
        console.error("Error parsing SSE data:", err, "Raw data:", event.data);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE connection error:", err);

      setState((prev) => {
        // If we already have content, just close gracefully
        if (prev.content.length > 0) {
          eventSource.close();
          return {
            ...prev,
            isGenerating: false,
            progress: 100,
            connectionStatus: "idle",
          };
        }

        // Otherwise, try to reconnect
        const shouldRetry = retryCountRef.current < maxRetries;
        retryCountRef.current += 1;

        if (shouldRetry) {
          return {
            ...prev,
            connectionStatus: "reconnecting",
            error: `Connection lost. Retrying... (${retryCountRef.current}/${maxRetries})`,
          };
        }

        return {
          ...prev,
          error:
            "Connection error. Please check if the API server is running on http://localhost:8080",
          isGenerating: false,
          connectionStatus: "disconnected",
        };
      });

      eventSource.close();

      // Retry logic
      if (retryCountRef.current < maxRetries) {
        setTimeout(() => {
          console.log(
            `Retrying connection... (${retryCountRef.current}/${maxRetries})`,
          );
          connectToStream(jobId);
        }, 2000 * retryCountRef.current); // Exponential backoff
      }
    };
  }, []);

  const generate = useCallback(
    async (topicOverride?: string) => {
      const topicToUse = topicOverride || state.topic;

      if (!topicToUse.trim()) {
        setState((prev) => ({ ...prev, error: "Please enter a topic" }));
        return;
      }

      setState((prev) => ({
        ...prev,
        isGenerating: true,
        content: "",
        error: null,
        jobId: null,
        progress: 0,
        connectionStatus: "idle",
      }));

      startTimeRef.current = Date.now();
      retryCountRef.current = 0;

      try {
        console.log("Creating blog job for topic:", topicToUse);
        const response = await fetch(getCreateBlogUrl(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic: topicToUse.trim() }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error ||
              `Failed to create blog job: ${response.statusText}`,
          );
        }

        const data = await response.json();
        const newJobId = data.job_id;

        setState((prev) => ({
          ...prev,
          jobId: newJobId,
          progress: 5,
        }));

        console.log("Job created with ID:", newJobId);
        connectToStream(newJobId);
      } catch (err) {
        console.error("Error creating job:", err);
        setState((prev) => ({
          ...prev,
          error:
            err instanceof Error
              ? err.message
              : "An error occurred. Please check if the API server is running.",
          isGenerating: false,
          connectionStatus: "disconnected",
        }));
      }
    },
    [state.topic, connectToStream],
  );

  const stop = useCallback(() => {
    console.log("Stopping generation");
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    setState((prev) => ({
      ...prev,
      isGenerating: false,
      connectionStatus: "idle",
    }));
  }, []);

  const reset = useCallback(() => {
    stop();
    setState({
      topic: "",
      content: "",
      isGenerating: false,
      jobId: null,
      error: null,
      progress: 0,
      estimatedTime: 60,
      connectionStatus: "idle",
    });
  }, [stop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  return {
    ...state,
    setTopic,
    generate,
    stop,
    reset,
  };
}
