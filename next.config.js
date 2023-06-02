/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'pixabay.com', 'cdn.pixabay.com'],
  },
}

module.exports = nextConfig
