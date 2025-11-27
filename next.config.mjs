/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["lh3.googleusercontent.com", "i.ibb.co.com"], // allow Google profile images
  },
};

export default nextConfig;
