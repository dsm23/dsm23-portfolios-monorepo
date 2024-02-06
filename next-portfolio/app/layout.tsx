import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import Layout from "~/components/layout";
import ThemeProvider from "~/components/theme-provider";
import { PHProvider } from "./providers";

import "./global.css";

export const metadata: Metadata = {
  title: "David Murdoch Portfolio - Next.js",
  description:
    "A portfolio showing off the experience and projects of David Murdoch",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <PHProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogPageView />

          <Layout>{children}</Layout>
        </ThemeProvider>
      </PHProvider>
    </body>
  </html>
);

export default RootLayout;
