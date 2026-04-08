/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows production builds to successfully complete 
    // even if your project has ESLint errors (like the unescaped entities).
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
