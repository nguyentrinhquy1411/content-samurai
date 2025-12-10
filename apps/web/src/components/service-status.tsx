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
      } catch (error) {
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
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "unhealthy":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "checking":
        return <Loader2 className="h-4 w-4 animate-spin text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (apiStatus.status) {
      case "healthy":
        return "text-green-600 bg-green-50 border-green-200";
      case "unhealthy":
        return "text-red-600 bg-red-50 border-red-200";
      case "checking":
        return "text-gray-600 bg-gray-50 border-gray-200";
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
