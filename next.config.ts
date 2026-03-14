import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Images served from the same origin don't need a remote pattern
  images: {
    unoptimized: false,
  },
}

export default nextConfig
