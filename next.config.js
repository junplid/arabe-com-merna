/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "img.youtube.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
