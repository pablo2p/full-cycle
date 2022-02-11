/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'blog.geekhunter.com.br',
      'blog-geek-midia.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
