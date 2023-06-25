/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-private.canva.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
