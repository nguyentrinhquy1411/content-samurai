"use client";

import { Check, Copy, Loader2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ServiceStatus } from "@/components/service-status";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getCreateBlogUrl, getStreamUrl } from "@/lib/config";

interface StreamData {
  chunk?: string;
  done?: boolean;
  error?: string;
}

export function BlogGenerator() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);
  const contentEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when content updates
  useEffect(() => {
    if (isGenerating && contentEndRef.current) {
      contentEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isGenerating]);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    setIsGenerating(true);
    setContent("");
    setError(null);
    setJobId(null);

    try {
      // Step 1: Create job
      console.log("Creating blog job for topic:", topic);
      const response = await fetch(getCreateBlogUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topic.trim() }),
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
      setJobId(newJobId);
      console.log("Job created with ID:", newJobId);

      // Step 2: Stream results via SSE
      const streamUrl = getStreamUrl(newJobId);
      console.log("Connecting to stream:", streamUrl);
      const eventSource = new EventSource(streamUrl);
      eventSourceRef.current = eventSource;

      eventSource.onopen = () => {
        console.log("SSE connection opened");
      };

      eventSource.onmessage = (event) => {
        try {
          // Skip ping/heartbeat messages
          if (!event.data || event.data.trim() === "") {
            return;
          }

          const data: StreamData = JSON.parse(event.data);
          console.log("Received SSE data:", data);

          if (data.done) {
            console.log("Stream completed");
            setIsGenerating(false);
            eventSource.close();
          } else if (data.error) {
            console.error("Stream error:", data.error);
            setError(data.error);
            setIsGenerating(false);
            eventSource.close();
          } else if (data.chunk) {
            setContent((prev) => prev + data.chunk);
          }
        } catch (err) {
          console.error(
            "Error parsing SSE data:",
            err,
            "Raw data:",
            event.data,
          );
          // Don't set error for parse failures, might be heartbeat
        }
      };

      eventSource.onerror = (err) => {
        console.error("SSE connection error:", err);

        // Check if we already have some content, if so, don't show error
        if (content.length > 0) {
          setIsGenerating(false);
          eventSource.close();
          return;
        }

        setError(
          "Connection error. Please check if the API server is running on http://localhost:8080",
        );
        setIsGenerating(false);
        eventSource.close();
      };
    } catch (err) {
      console.error("Error creating job:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please check if the API server is running.",
      );
      setIsGenerating(false);
    }
  };

  const handleStop = () => {
    console.log("Stopping generation");
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleReset = () => {
    setTopic("");
    setContent("");
    setError(null);
    setJobId(null);
    handleStop();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  return (
    <div className="container mx-auto max-w-4xl p-4 space-y-6">
      <div className="text-center space-y-2 py-8">
        <div className="flex items-center justify-center mb-4">
          <ServiceStatus />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Content Samurai</h1>
        <p className="text-[var(--color-muted-foreground)] text-lg">
          AI-powered SEO blog generator with real-time streaming
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Blog Post</CardTitle>
          <CardDescription>
            Enter a topic and let AI create an SEO-optimized blog post for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter your blog topic (e.g., 'How to learn Go programming')"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !isGenerating) {
                  handleGenerate();
                }
              }}
              disabled={isGenerating}
              className="flex-1"
            />
            {!isGenerating ? (
              <Button
                onClick={handleGenerate}
                disabled={!topic.trim() || isGenerating}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate
              </Button>
            ) : (
              <Button onClick={handleStop} variant="destructive">
                Stop
              </Button>
            )}
          </div>

          {error && (
            <div className="p-4 bg-[var(--color-destructive)]/10 border border-[var(--color-destructive)] rounded-md">
              <p className="text-sm text-[var(--color-destructive)] font-medium">
                {error}
              </p>
              {error.includes("API server") && (
                <p className="text-xs text-[var(--color-destructive)] mt-2">
                  Make sure the Go API server is running on port 8080 and the
                  agent worker is processing jobs.
                </p>
              )}
            </div>
          )}

          {jobId && (
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
              <span className="font-mono text-xs bg-[var(--color-muted)] px-2 py-1 rounded">
                Job ID: {jobId}
              </span>
              {isGenerating && (
                <span className="flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Generating...
                </span>
              )}
              {!isGenerating && content && (
                <span className="flex items-center gap-1 text-green-600">
                  <Check className="h-3 w-3" />
                  Completed
                </span>
              )}
            </div>
          )}

          {content && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Generated Content</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopy}
                  disabled={isGenerating}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="relative">
                <div className="min-h-[300px] max-h-[600px] overflow-y-auto p-4 bg-[var(--color-muted)]/30 rounded-md border border-[var(--color-border)]">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {content}
                    </ReactMarkdown>
                    {isGenerating && (
                      <span className="inline-block w-2 h-4 bg-[var(--color-primary)] animate-pulse ml-1" />
                    )}
                  </div>
                  <div ref={contentEndRef} />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        {content && !isGenerating && (
          <CardFooter>
            <Button onClick={handleReset} variant="outline" className="w-full">
              Generate Another Blog
            </Button>
          </CardFooter>
        )}
      </Card>

      <div className="text-center text-sm text-[var(--color-muted-foreground)]">
        <p>
          Powered by AI • RabbitMQ for job queuing • Redis Pub/Sub for real-time
          streaming
        </p>
      </div>
    </div>
  );
}
