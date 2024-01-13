import type { ReactNode } from "react";
import type { Metadata } from "next";

import Layout from "~/components/layout";
import ThemeProvider from "~/components/theme-provider";

import "./global.css";

export const metadata: Metadata = {
  title: "David Murdoch Portfolio - Next.js",
  description:
    "A portfolio showing off the experience and projects of David Murdoch",
};

// export const viewport = {
//   colorScheme: "light dark",
// };

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <meta name="color-scheme" content="light dark" />
    </head>
    <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Layout>{children}</Layout>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
