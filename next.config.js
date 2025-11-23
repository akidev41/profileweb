/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProduction && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProduction ? '/profileweb' : '',
  basePath: isProduction ? '/profileweb' : ''
}

module.exports = nextConfig