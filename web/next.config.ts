import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/valsync-website" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || "",
  },
};

export default nextConfig;
