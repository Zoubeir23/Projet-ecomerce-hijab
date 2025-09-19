/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Configuration pour Render
  experimental: {
    outputFileTracingRoot: undefined,
  },
  transpilePackages: ['react-bootstrap'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  }
}

module.exports = nextConfig