/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
