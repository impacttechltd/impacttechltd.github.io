/** @type {import('next').NextConfig} */

export default {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
