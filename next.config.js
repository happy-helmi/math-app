/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "/var/www/vhosts/determined-dubinsky.5-35-241-144.plesk.page/httpdocs",
  trailingSlash: true
};

module.exports = nextConfig;
