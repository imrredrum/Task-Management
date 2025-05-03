import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  /* config options here */
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
}

export default nextConfig
