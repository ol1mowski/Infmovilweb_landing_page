/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "127.0.0.1",
      },
    ],
  },
  output: 'standalone',
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};

export default nextConfig;
