/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["lh3.googleusercontent.com", "i.ibb.co.com", "i.ibb.co"], // allow Google profile images
  },
};

export default nextConfig;
