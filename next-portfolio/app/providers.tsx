// app/providers.tsx
"use client";
import type { FunctionComponent, ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

type Props = {
  children: ReactNode;
};

if (typeof window !== "undefined") {
  posthog.init(process.env.POSTHOG_KEY as string, {
    api_host: process.env.POSTHOG_HOST,

    // Disable automatic pageview capture, as we capture manually
    capture_pageview: false,
  });
}

export const PHProvider: FunctionComponent<Props> = ({ children }) => (
  <PostHogProvider client={posthog}>{children}</PostHogProvider>
);
