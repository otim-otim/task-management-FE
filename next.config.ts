import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Enable Turbopack for development
  experimental: {
    turbo: {
      // Optional: configure Turbopack rules
      rules: {
        // Example of custom rules if needed
        // '.*.css$': ['styled-components/babel']
      }
    }
  },

  // Disable React strict mode if causing issues
  reactStrictMode: true,

  // Configure image optimization
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance and security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // Customize redirects if needed
  async redirects() {
    return [
      // Example redirect
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true
      // }
    ]
  },

  // Customize environment variables
  env: {
    // Add any custom environment configurations
    NEXT_PUBLIC_APP_VERSION: '1.0.0',
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: process.env.NODE_ENV === 'production'
  }
}

export default nextConfig
