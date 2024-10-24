//https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
