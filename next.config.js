/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for development
  // trailingSlash: true,
  images: {
    // unoptimized: true, // Commented out for development
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