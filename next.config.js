/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ytimg.com",
      "yt3.ggpht.com",
      "res.cloudinary.com",
      "dev.to/social_previews",
      "dev.to",
    ],
  },
};

module.exports = nextConfig;
