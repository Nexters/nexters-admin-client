/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@weekly/ui', '@weekly/api'],
};
