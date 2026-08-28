// Set NEXT_BASE_PATH when the site is served from a sub-path, e.g. a GitHub
// Pages project site at https://<org>.github.io/web/ needs "/web". Leave it
// unset for local dev, Vercel, or a custom domain served from the root.
const basePath = process.env.NEXT_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true }
};

export default nextConfig;
