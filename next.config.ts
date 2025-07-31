import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // optionally add port, pathname if needed
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
    ],
  },
};

export default nextConfig;
