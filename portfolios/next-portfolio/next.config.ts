import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
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
  devIndicators: !process.env.CI ? undefined : false,
  productionBrowserSourceMaps: true,
  serverExternalPackages: ["puppeteer-core"],
} satisfies NextConfig;

export default nextConfig;
