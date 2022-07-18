/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['muxiko-backend.herokuapp.com'] },
};

module.exports = nextConfig;
