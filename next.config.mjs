/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['i.pravatar.cc', 'encrypted-tbn3.gstatic.com'], // add your image hosts here
  },
};

export default nextConfig;
