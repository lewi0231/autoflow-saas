import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Disable polyfills for modern browsers
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
