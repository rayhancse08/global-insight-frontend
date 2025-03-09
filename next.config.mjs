/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["globalinsighthubs.com"], // ✅ Add the external image domain
  },
};

export default nextConfig;
