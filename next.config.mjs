/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            }
        ],
    },
    async redirects() {
        return [
            {
                source: '/lado-a',
                destination: '/consultoria',
                permanent: true,
            },
            {
                source: '/lado-b',
                destination: '/lab',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
