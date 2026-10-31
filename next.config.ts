import type { NextConfig } from "next";

/**
 * Deployment modes
 * - Vercel (default): no configuration needed.
 * - GitHub Pages: set STATIC_EXPORT=true and, for a project site served from
 *   https://<user>.github.io/<repo>, set BASE_PATH=/<repo>.
 */
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {}),
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: isStaticExport },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
