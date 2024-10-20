/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['fakestoreapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
      },
};

export default nextConfig;
