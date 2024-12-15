/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["i.scdn.co"],
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
