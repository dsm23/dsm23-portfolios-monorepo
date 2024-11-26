/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
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
  productionBrowserSourceMaps: true,
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;