/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
    unoptimized: true
  },
  // Optimize build output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Experimental features
  experimental: {
    optimizeCss: false, // Disable CSS optimization to prevent critters issues
  },
  // Build configuration
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Increase build memory limit if needed
  env: {
    NEXT_RUNTIME_MAX_MEMORY: '4096'
  }
}

module.exports = nextConfig 