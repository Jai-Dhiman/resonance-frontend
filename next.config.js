/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3001/api",
  },
  webpack: (config) => {
    config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ...config.resolve.extensions];
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@reduxjs/toolkit"],
  },
};

module.exports = nextConfig;
