/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // trailingSlash: false keeps canonical URLs clean
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig