/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: [
    '@weekly/ui',
    '@weekly/api',
    '@weekly/utils',
    '@weekly/msw',
  ],
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};
