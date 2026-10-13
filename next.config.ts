import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/energy22-next",
  cacheComponents: false,
  partialPrefetching: false,
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    resolveAlias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};

export default nextConfig;
