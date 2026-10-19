import type { NextConfig } from "next";

// This site now lives at https://sejalagarwal.ca/pink-website, served through the
// main site's rewrites. basePath moves every page and asset under that prefix.
const BASE_PATH = "/pink-website";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
