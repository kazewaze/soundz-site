/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/sounds/(.*)', // Match any file under /sounds/
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store', // Disable caching for sound files
          },
        ],
      },
      {
        source: '/sounds/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // or 'http://localhost:5173'
          },
        ],
      },
    ];
  },
};

export default nextConfig;