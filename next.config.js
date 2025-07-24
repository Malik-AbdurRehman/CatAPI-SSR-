/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["cdn2.thecatapi.com", "cdn.thecatapi.com", "cdn1.theimageapi.com"],
  },
}
