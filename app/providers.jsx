"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "@posthog/react";

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    capture_pageview: "history_change"
  });
}

export function PostHogProvider({ children }) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
