"use client";

import {
  BarChart3,
  BookOpen,
  Check,
  Copy,
  Download,
  Edit,
  Eye,
  Keyboard,
  Lightbulb,
  Loader2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ServiceStatus } from "@/components/service-status";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
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
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useBlogGeneration } from "@/hooks/useBlogGeneration";
import {
  commonShortcuts,
  useKeyboardShortcuts,
} from "@/hooks/useKeyboardShortcuts";
import { useSEOMetrics } from "@/hooks/useSEOMetrics";

export function BlogGenerator() {
  const {
    topic,
    content,
    isGenerating,
    jobId,
    error,
    progress,
    estimatedTime,
    connectionStatus,
    setTopic,
    generate,
    stop,
    reset,
  } = useBlogGeneration();

  const seoMetadata = useSEOMetrics(content);
  const [copied, setCopied] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const contentEndRef = useRef<HTMLDivElement>(null);

  const exampleTopics = [
    "How to improve React application performance in 2024",
    "Complete guide to SEO content writing for beginners",
    "10 best practices for API design and development",
    "Python data analysis tutorial for data scientists",
    "Email marketing strategies that actually convert",
  ];

  // Auto-scroll to bottom when content updates
  useEffect(() => {
    if (isGenerating && contentEndRef.current) {
      contentEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isGenerating]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleExport = (format: "markdown" | "html" | "text") => {
    let fileContent = content;
    let fileName = "blog.md";
    let mimeType = "text/markdown";

    if (format === "html") {
      // Simple markdown to HTML conversion
      fileContent = content
        .replace(/^# (.+)$/gm, "<h1>$1</h1>")
        .replace(/^## (.+)$/gm, "<h2>$1</h2>")
        .replace(/^### (.+)$/gm, "<h3>$1</h3>")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/\n\n/g, "</p><p>")
        .replace(/^(.+)$/gm, "<p>$1</p>");
      fileName = "blog.html";
      mimeType = "text/html";
    } else if (format === "text") {
      fileContent = content.replace(/[#*[\]()]/g, "");
      fileName = "blog.txt";
      mimeType = "text/plain";
    }

    const blob = new Blob([fileContent], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Keyboard shortcuts
  useKeyboardShortcuts(
    [
      commonShortcuts.generate(() => !isGenerating && topic && generate()),
      commonShortcuts.stop(() => isGenerating && stop()),
      commonShortcuts.reset(() => !isGenerating && reset()),
      commonShortcuts.copy(() => content && handleCopy()),
      commonShortcuts.preview(() => setIsPreviewMode((prev) => !prev)),
      commonShortcuts.export(() => content && handleExport("markdown")),
      commonShortcuts.help(() => setShowShortcuts((prev) => !prev)),
    ],
    { enabled: true },
  );

  const getMetaDescriptionStatus = () => {
    if (!seoMetadata.metaDescription) return null;
    const length = seoMetadata.metaDescription.length;
    if (length >= 155 && length <= 160)
      return { label: "Optimal", variant: "default" as const };
    if (length < 155)
      return { label: "Too Short", variant: "secondary" as const };
    return { label: "Too Long", variant: "destructive" as const };
  };

  const getSEOScoreColor = (score?: number) => {
    if (!score) return "text-muted-foreground";
    if (score >= 85) return "text-chart-1";
    if (score >= 70) return "text-chart-2";
    return "text-destructive";
  };

  return (
    <div className="container mx-auto max-w-4xl p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 py-8 relative">
        <div className="absolute right-0 top-0 flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowShortcuts(!showShortcuts)}
            className="touch-manipulation"
          >
            <Keyboard className="h-4 w-4" />
          </Button>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-center mb-4">
          <ServiceStatus />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Content Samurai</h1>
        <p className="text-muted-foreground text-lg">
          AI-powered SEO blog generator with real-time streaming
        </p>
      </div>

      {/* Keyboard Shortcuts Dialog */}
      {showShortcuts && (
        <Card className="mb-4 border-primary">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Keyboard className="h-4 w-4" />
              Keyboard Shortcuts
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Generate</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">
                Ctrl+Enter
              </kbd>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Stop</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Copy</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">
                Ctrl+Shift+C
              </kbd>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Preview</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+P</kbd>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Export</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+E</kbd>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reset</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+R</kbd>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Card */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Blog Post</CardTitle>
          <CardDescription>
            Enter a topic and let AI create an SEO-optimized blog post for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="topic-input" className="text-sm font-medium">
                Blog Topic
              </Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowExamples(!showExamples)}
                className="text-xs h-auto py-1"
              >
                <Lightbulb className="h-3 w-3 mr-1" />
                {showExamples ? "Hide" : "Show"} Examples
              </Button>
            </div>

            {/* Example Topics */}
            {showExamples && (
              <div className="bg-muted/50 rounded-md p-3 space-y-2">
                <p className="text-xs text-muted-foreground font-medium">
                  Example topics:
                </p>
                <div className="space-y-1">
                  {exampleTopics.map((example) => (
                    <button
                      key={example}
                      type="button"
                      onClick={() => setTopic(example)}
                      disabled={isGenerating}
                      className="block w-full text-left text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded px-2 py-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      • {example}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <div className="flex-1 space-y-1.5">
                <Input
                  id="topic-input"
                  placeholder="e.g., 'How to improve React application performance'"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isGenerating && topic) {
                      generate();
                    }
                  }}
                  disabled={isGenerating}
                  className="w-full"
                  aria-label="Blog topic input"
                  aria-describedby="topic-hint"
                />
                <p
                  id="topic-hint"
                  className="text-xs text-muted-foreground px-1"
                >
                  Be specific for better results (e.g., include target audience
                  or year)
                </p>
              </div>
              {!isGenerating ? (
                <Button
                  onClick={() => generate()}
                  disabled={!topic.trim() || isGenerating}
                  className="touch-manipulation self-start"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate
                </Button>
              ) : (
                <Button
                  onClick={stop}
                  variant="destructive"
                  className="touch-manipulation self-start"
                >
                  Stop
                </Button>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          {isGenerating && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {connectionStatus === "connected"
                    ? "Generating content..."
                    : connectionStatus === "reconnecting"
                      ? "Reconnecting..."
                      : "Initializing..."}
                </span>
                <span className="text-muted-foreground">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Estimated time: ~{estimatedTime}s
              </p>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive rounded-md">
              <p className="text-sm text-destructive font-medium">{error}</p>
              {error.includes("API server") && (
                <p className="text-xs text-destructive mt-2">
                  Make sure the Go API server is running on port 8080 and the
                  agent worker is processing jobs.
                </p>
              )}
            </div>
          )}

          {/* Job ID Status */}
          {jobId && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
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

          {/* SEO Metrics Dashboard */}
          {content &&
            (seoMetadata.metaDescription || seoMetadata.wordCount) && (
              <Card className="border-primary/30 bg-accent/50 metrics-enter">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    SEO Metrics
                    {seoMetadata.seoScore !== undefined && (
                      <Badge variant="outline" className="ml-auto">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span
                          className={getSEOScoreColor(seoMetadata.seoScore)}
                        >
                          {seoMetadata.seoScore}/100
                        </span>
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Meta Description */}
                  {seoMetadata.metaDescription && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Meta Description
                      </p>
                      <p className="text-sm bg-card p-2 rounded border">
                        {seoMetadata.metaDescription}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Length: {seoMetadata.metaDescription.length}/160
                        characters
                        {getMetaDescriptionStatus() && (
                          <Badge
                            variant={getMetaDescriptionStatus()?.variant}
                            className="ml-2 text-xs"
                          >
                            {getMetaDescriptionStatus()?.label}
                          </Badge>
                        )}
                      </p>
                    </div>
                  )}

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {seoMetadata.wordCount !== undefined && (
                      <div className="bg-card p-3 rounded border">
                        <p className="text-xs text-muted-foreground">Words</p>
                        <p className="text-xl font-bold text-primary">
                          {seoMetadata.wordCount.toLocaleString()}
                        </p>
                        {seoMetadata.readingTime && (
                          <p className="text-xs text-muted-foreground">
                            ~{seoMetadata.readingTime} min read
                          </p>
                        )}
                      </div>
                    )}
                    {seoMetadata.h2Count !== undefined && (
                      <div className="bg-card p-3 rounded border">
                        <p className="text-xs text-muted-foreground">
                          H2 Sections
                        </p>
                        <p className="text-xl font-bold text-chart-1">
                          {seoMetadata.h2Count}
                        </p>
                      </div>
                    )}
                    {seoMetadata.h3Count !== undefined && (
                      <div className="bg-card p-3 rounded border">
                        <p className="text-xs text-muted-foreground">
                          H3 Subsections
                        </p>
                        <p className="text-xl font-bold text-chart-3">
                          {seoMetadata.h3Count}
                        </p>
                      </div>
                    )}
                    {seoMetadata.faqCount !== undefined &&
                      seoMetadata.faqCount > 0 && (
                        <div className="bg-card p-3 rounded border">
                          <p className="text-xs text-muted-foreground">FAQs</p>
                          <p className="text-xl font-bold text-chart-4">
                            {seoMetadata.faqCount}
                          </p>
                        </div>
                      )}
                  </div>

                  {/* Links Section */}
                  {(seoMetadata.internalLinks?.length ||
                    seoMetadata.externalLinks?.length) && <Separator />}

                  {seoMetadata.internalLinks &&
                    seoMetadata.internalLinks.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Internal Linking Opportunities
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {seoMetadata.internalLinks.slice(0, 4).map((link) => (
                            <Badge
                              key={link}
                              variant="outline"
                              className="text-xs"
                            >
                              {link}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                  {seoMetadata.externalLinks &&
                    seoMetadata.externalLinks.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          External Authority Sources
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {seoMetadata.externalLinks.slice(0, 3).map((link) => (
                            <Badge
                              key={link}
                              variant="secondary"
                              className="text-xs"
                            >
                              {link}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                </CardContent>
              </Card>
            )}

          {/* Content Display */}
          {content && (
            <div className="space-y-4">
              {/* Toolbar */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm font-medium">Generated Content</h3>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsPreviewMode(!isPreviewMode)}
                    disabled={isGenerating}
                    className="touch-manipulation"
                  >
                    {isPreviewMode ? (
                      <>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopy}
                    disabled={isGenerating}
                    className="touch-manipulation"
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
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleExport("markdown")}
                    disabled={isGenerating}
                    className="touch-manipulation"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Content Area */}
              <div className="relative">
                <div className="min-h-[300px] max-h-[600px] overflow-y-auto p-6 bg-muted/30 rounded-md border content-display">
                  {isPreviewMode ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({ children }) => (
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-foreground flex items-center gap-2 group">
                              <span className="w-1 h-6 bg-primary rounded"></span>
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-foreground">
                              {children}
                            </h3>
                          ),
                          p: ({ children }) => (
                            <p className="mb-4 leading-relaxed text-foreground">
                              {children}
                            </p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">
                              {children}
                            </ol>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold text-primary">
                              {children}
                            </strong>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 bg-muted/50 italic">
                              {children}
                            </blockquote>
                          ),
                          code: ({ children }) => (
                            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                              {children}
                            </code>
                          ),
                        }}
                      >
                        {content}
                      </ReactMarkdown>
                      {isGenerating && (
                        <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                      )}
                    </div>
                  ) : (
                    <textarea
                      className="w-full h-full min-h-[500px] bg-transparent border-0 outline-none resize-none font-mono text-sm"
                      value={content}
                      readOnly
                      aria-label="Generated blog content"
                    />
                  )}
                  <div ref={contentEndRef} />
                </div>
              </div>

              {/* Screen reader announcement */}
              <output aria-live="polite" aria-atomic="true" className="sr-only">
                {isGenerating
                  ? `Generating blog post about ${topic}. Progress: ${Math.round(progress)}%`
                  : content
                    ? "Blog post generation complete"
                    : ""}
              </output>
            </div>
          )}
        </CardContent>

        {/* Footer Actions */}
        {content && !isGenerating && (
          <CardFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={reset}
              variant="outline"
              className="flex-1 touch-manipulation"
            >
              Generate Another Blog
            </Button>
          </CardFooter>
        )}
      </Card>

      {/* Footer Info */}
      <div className="text-center text-sm text-muted-foreground no-print">
        <p>
          Crafted with AI • Built for speed and precision • Your content partner
        </p>
        <p className="mt-1 text-xs">
          Press{" "}
          <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Shift+?</kbd>{" "}
          for keyboard shortcuts
        </p>
      </div>
    </div>
  );
}
