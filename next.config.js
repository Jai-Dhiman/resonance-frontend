/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"],
  },
  webpack: (config) => {
    config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ...config.resolve.extensions];
    return config;
  },
};

module.exports = nextConfig;
