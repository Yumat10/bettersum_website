/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/content",
        destination: "https://content.bettersum.com",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
