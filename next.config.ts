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
        // Proxy Shopify cart permalinks and checkout paths through to the
        // myshopify.com domain so checkout works when the custom domain
        // (getpressr.com) points to Vercel rather than Shopify.
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
