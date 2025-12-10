import { createFileRoute } from "@tanstack/react-router";
import { BlogGenerator } from "@/components/blog-generator";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <BlogGenerator />
    </main>
  );
}
