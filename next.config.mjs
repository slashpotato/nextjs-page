/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'http.cat',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'shields.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
