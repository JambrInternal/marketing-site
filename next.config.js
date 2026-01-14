/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  basePath,
  assetPrefix: basePath || undefined
};

module.exports = nextConfig;
