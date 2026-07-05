import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cart/:path*",
        destination: "https://marati-5036.myshopify.com/cart/:path*",
      },
      {
        source: "/checkouts/:path*",
        destination: "https://marati-5036.myshopify.com/checkouts/:path*",
      },
    ];
  },
};

export default nextConfig;
