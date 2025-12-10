export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  ENDPOINTS: {
    CREATE_BLOG: "/api/blog",
    STREAM: "/api/stream",
  },
} as const;

export function getStreamUrl(jobId: string): string {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.STREAM}/${jobId}`;
}

export function getCreateBlogUrl(): string {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CREATE_BLOG}`;
}
