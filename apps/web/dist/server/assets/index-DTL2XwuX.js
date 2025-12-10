import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Sparkles, Loader2, Check, Copy } from "lucide-react";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow hover:bg-[var(--color-primary)]/90",
        destructive:
          "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] shadow-sm hover:bg-[var(--color-destructive)]/90",
        outline:
          "border border-[var(--color-input)] bg-[var(--color-background)] shadow-sm hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]",
        secondary:
          "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] shadow-sm hover:bg-[var(--color-secondary)]/80",
        ghost:
          "hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]",
        link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props,
    });
  },
);
Button.displayName = "Button";
const Card = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx("div", {
    ref,
    className: cn(
      "rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-card-foreground)] shadow",
      className,
    ),
    ...props,
  }),
);
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx("div", {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props,
  }),
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx("div", {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props,
  }),
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx("div", {
    ref,
    className: cn("text-sm text-[var(--color-muted-foreground)]", className),
    ...props,
  }),
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx("div", {
    ref,
    className: cn("p-6 pt-0", className),
    ...props,
  }),
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ jsx("div", {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props,
  }),
);
CardFooter.displayName = "CardFooter";
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx("input", {
    type,
    className: cn(
      "flex h-9 w-full rounded-md border border-[var(--color-input)] bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
    ),
    ref,
    ...props,
  });
});
Input.displayName = "Input";
const API_BASE_URL = "http://localhost:8080/api";
function BlogGenerator() {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState("");
  const [jobId, setJobId] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const eventSourceRef = useRef(null);
  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setContent("");
    setError(null);
    setJobId(null);
    try {
      const response = await fetch(`${API_BASE_URL}/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      if (!response.ok) {
        throw new Error("Failed to create blog job");
      }
      const data = await response.json();
      const newJobId = data.job_id;
      setJobId(newJobId);
      const eventSource = new EventSource(`${API_BASE_URL}/stream/${newJobId}`);
      eventSourceRef.current = eventSource;
      eventSource.onmessage = (event) => {
        try {
          const data2 = JSON.parse(event.data);
          if (data2.done) {
            setIsGenerating(false);
            eventSource.close();
          } else if (data2.error) {
            setError(data2.error);
            setIsGenerating(false);
            eventSource.close();
          } else if (data2.chunk) {
            setContent((prev) => prev + data2.chunk);
          }
        } catch (err) {
          console.error("Error parsing SSE data:", err);
        }
      };
      eventSource.onerror = (err) => {
        console.error("SSE error:", err);
        setError("Connection error. Please try again.");
        setIsGenerating(false);
        eventSource.close();
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsGenerating(false);
    }
  };
  const handleStop = () => {
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
      setTimeout(() => setCopied(false), 2e3);
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
  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "container mx-auto max-w-4xl p-4 space-y-6",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "text-center space-y-2 py-8",
        children: [
          /* @__PURE__ */ jsx("h1", {
            className: "text-4xl font-bold tracking-tight",
            children: "Content Samurai",
          }),
          /* @__PURE__ */ jsx("p", {
            className: "text-[var(--color-muted-foreground)] text-lg",
            children: "AI-powered SEO blog generator with real-time streaming",
          }),
        ],
      }),
      /* @__PURE__ */ jsxs(Card, {
        children: [
          /* @__PURE__ */ jsxs(CardHeader, {
            children: [
              /* @__PURE__ */ jsx(CardTitle, {
                children: "Generate Blog Post",
              }),
              /* @__PURE__ */ jsx(CardDescription, {
                children:
                  "Enter a topic and let AI create an SEO-optimized blog post for you",
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(CardContent, {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "flex gap-2",
                children: [
                  /* @__PURE__ */ jsx(Input, {
                    placeholder:
                      "Enter your blog topic (e.g., 'How to learn Go programming')",
                    value: topic,
                    onChange: (e) => setTopic(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && !isGenerating) {
                        handleGenerate();
                      }
                    },
                    disabled: isGenerating,
                    className: "flex-1",
                  }),
                  !isGenerating
                    ? /* @__PURE__ */ jsxs(Button, {
                        onClick: handleGenerate,
                        disabled: !topic.trim() || isGenerating,
                        children: [
                          /* @__PURE__ */ jsx(Sparkles, {
                            className: "mr-2 h-4 w-4",
                          }),
                          "Generate",
                        ],
                      })
                    : /* @__PURE__ */ jsx(Button, {
                        onClick: handleStop,
                        variant: "destructive",
                        children: "Stop",
                      }),
                ],
              }),
              error &&
                /* @__PURE__ */ jsx("div", {
                  className:
                    "p-4 bg-[var(--color-destructive)]/10 border border-[var(--color-destructive)] rounded-md",
                  children: /* @__PURE__ */ jsx("p", {
                    className: "text-sm text-[var(--color-destructive)]",
                    children: error,
                  }),
                }),
              jobId &&
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]",
                  children: [
                    /* @__PURE__ */ jsxs("span", {
                      className:
                        "font-mono text-xs bg-[var(--color-muted)] px-2 py-1 rounded",
                      children: ["Job ID: ", jobId],
                    }),
                    isGenerating &&
                      /* @__PURE__ */ jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsx(Loader2, {
                            className: "h-3 w-3 animate-spin",
                          }),
                          "Generating...",
                        ],
                      }),
                  ],
                }),
              content &&
                /* @__PURE__ */ jsxs("div", {
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        /* @__PURE__ */ jsx("h3", {
                          className: "text-sm font-medium",
                          children: "Generated Content",
                        }),
                        /* @__PURE__ */ jsx(Button, {
                          size: "sm",
                          variant: "outline",
                          onClick: handleCopy,
                          disabled: isGenerating,
                          children: copied
                            ? /* @__PURE__ */ jsxs(Fragment, {
                                children: [
                                  /* @__PURE__ */ jsx(Check, {
                                    className: "h-4 w-4 mr-2",
                                  }),
                                  "Copied!",
                                ],
                              })
                            : /* @__PURE__ */ jsxs(Fragment, {
                                children: [
                                  /* @__PURE__ */ jsx(Copy, {
                                    className: "h-4 w-4 mr-2",
                                  }),
                                  "Copy",
                                ],
                              }),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsx("div", {
                      className: "relative",
                      children: /* @__PURE__ */ jsxs("div", {
                        className:
                          "min-h-[300px] max-h-[600px] overflow-y-auto p-4 bg-[var(--color-muted)]/30 rounded-md border border-[var(--color-border)]",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className:
                              "prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap",
                            children: content,
                          }),
                          isGenerating &&
                            /* @__PURE__ */ jsx("span", {
                              className:
                                "inline-block w-2 h-4 bg-[var(--color-primary)] animate-pulse ml-1",
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          }),
          content &&
            !isGenerating &&
            /* @__PURE__ */ jsx(CardFooter, {
              children: /* @__PURE__ */ jsx(Button, {
                onClick: handleReset,
                variant: "outline",
                className: "w-full",
                children: "Generate Another Blog",
              }),
            }),
        ],
      }),
      /* @__PURE__ */ jsx("div", {
        className: "text-center text-sm text-[var(--color-muted-foreground)]",
        children: /* @__PURE__ */ jsx("p", {
          children:
            "Powered by AI • Using RabbitMQ for job queuing • Real-time streaming via Redis Pub/Sub",
        }),
      }),
    ],
  });
}
function Home() {
  return /* @__PURE__ */ jsx("main", {
    className: "min-h-screen bg-background",
    children: /* @__PURE__ */ jsx(BlogGenerator, {}),
  });
}
export { Home as component };
