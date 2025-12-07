import { j as t } from "./main-Bh9wfLDc.js";
function s() {
  return t.jsxs("main", {
    className:
      "min-h-dvh w-screen flex items-center justify-center flex-col gap-y-4 p-4",
    children: [
      t.jsx("img", {
        className: "max-w-sm w-full",
        src: "https://raw.githubusercontent.com/TanStack/tanstack.com/main/public/images/logos/splash-dark.png",
        alt: "TanStack Logo",
      }),
      t.jsxs("h1", {
        children: [
          t.jsx("span", { className: "line-through", children: "Next.js" }),
          " TanStack Start",
        ],
      }),
      t.jsx("a", {
        className:
          "bg-foreground text-background rounded-full px-4 py-1 hover:opacity-90",
        href: "https://tanstack.com/start/latest",
        target: "_blank",
        rel: "noopener",
        children: "Docs",
      }),
    ],
  });
}
export { s as component };
