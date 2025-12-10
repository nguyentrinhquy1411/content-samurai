"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface HealthStatus {
  status: "healthy" | "unhealthy" | "checking";
  message?: string;
}

export function ServiceStatus() {
  const [apiStatus, setApiStatus] = useState<HealthStatus>({
    status: "checking",
  });

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("http://localhost:8080/health", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setApiStatus({
            status: "healthy",
            message: "API is running",
          });
        } else {
          setApiStatus({
            status: "unhealthy",
            message: "API returned an error",
          });
        }
      } catch {
        setApiStatus({
          status: "unhealthy",
          message: "Cannot connect to API server",
        });
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = () => {
    switch (apiStatus.status) {
      case "healthy":
        return <CheckCircle2 className="h-4 w-4 text-chart-1" />;
      case "unhealthy":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "checking":
        return (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        );
    }
  };

  const getStatusColor = () => {
    switch (apiStatus.status) {
      case "healthy":
        return "text-chart-1 bg-accent/50 border-chart-1/30";
      case "unhealthy":
        return "text-destructive bg-destructive/10 border-destructive/30";
      case "checking":
        return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${getStatusColor()}`}
    >
      {getStatusIcon()}
      <span>{apiStatus.message || "Checking..."}</span>
    </div>
  );
}
