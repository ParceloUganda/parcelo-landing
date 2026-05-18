import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow images from logo.dev and google favicons for Brands component
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.logo.dev' },
      { protocol: 'https', hostname: 'www.google.com' },
    ],
  },
}

export default nextConfig
