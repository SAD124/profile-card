/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // keep your other config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',          // leave empty if default
        pathname: '/**',   // allows all paths
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn3.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
