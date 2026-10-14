import path from "node:path";
import type { NextConfig } from "next";

const isDev: boolean = process.env.NODE_ENV === "development";
const basePath: string = isDev ? "" : "/energy22-next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath,
  cacheComponents: false,
  partialPrefetching: false,
  output: "export",
  trailingSlash: true,
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
  sassOptions: {
    additionalData: `$basePath: "${basePath}";`,
  },
};

export default nextConfig;
