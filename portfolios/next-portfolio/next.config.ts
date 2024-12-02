import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import { env } from "./env";

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

export default () => {
  const plugins = [withBundleAnalyzer({ enabled: env.ANALYZE })];

  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });

  return config;
};
