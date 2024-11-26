import type { FunctionComponent, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Layout from "~/components/layout";
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
          <StoreProvider>
            <Layout profilePic={profilePic}>{children}</Layout>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
