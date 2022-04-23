/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
