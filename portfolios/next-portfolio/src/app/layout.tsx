import type { FunctionComponent, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Layout from "~/components/layout";
import { ProgressBar, ProgressBarProvider } from "~/components/progress-bar";
import ThemeProvider from "~/components/theme-provider";
import { getProfilePic } from "~/utils/api";

import "./global.css";

import StoreProvider from "~/components/store-provider";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.ORIGIN_URL as string),
  title: "David Murdoch Portfolio - Next.js",
  description:
    "A portfolio showing off the experience and projects of David Murdoch",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

const RootLayout: FunctionComponent<Props> = async ({ children }) => {
  const profilePic = await getProfilePic();

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBarProvider>
            <StoreProvider>
              <ProgressBar className="fixed top-0 z-50 h-1 bg-sky-500 shadow-lg shadow-sky-500/20" />
              <Layout profilePic={profilePic}>{children}</Layout>
            </StoreProvider>
          </ProgressBarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
