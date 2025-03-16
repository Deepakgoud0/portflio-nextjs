/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: {
    domains: ['github.com'],
    unoptimized: true
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];  // required for three.js
    
    // Add GLSL loader for shaders if needed
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });

    return config;
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