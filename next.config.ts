import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // for deployment purpose, change if needed
  images: { 
    unoptimized: true 
  }
};

export default nextConfig;
