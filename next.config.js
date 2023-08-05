/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = nextConfig


/**
experimental: {
        appDir: true,
    },
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.weatherapi.com",
            },
        ],
        minimumCacheTTL: 15000000,
    },


const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['localhost']
    }
}

module.exports = nextConfig
 */