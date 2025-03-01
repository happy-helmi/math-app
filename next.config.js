/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '../httpdocs'  // Der statische Export wird direkt nach /httpdocs geschrieben
};

module.exports = nextConfig;
