import type { NextConfig } from "next";

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: !process.env.CI,
  },
  productionBrowserSourceMaps: true,
  serverExternalPackages: ["puppeteer-core"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
} satisfies NextConfig;

export default config;
