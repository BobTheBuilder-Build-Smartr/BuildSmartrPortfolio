/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // Use basePath and assetPrefix only on GitHub Pages
  ...(isProd
    ? { basePath: "/BuildSmartrPortfolio", assetPrefix: "/BuildSmartrPortfolio/" }
    : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "randomuser.me" },
      { hostname: "images.unsplash.com" },
      { hostname: "avatar.vercel.sh" },
      { hostname: "via.placeholder.com" },
    ],
  },
};

export default nextConfig;
