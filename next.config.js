/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "httpdocs", // Stellt sicher, dass die Build-Dateien in /httpdocs generiert werden
  trailingSlash: true // Sorgt für korrekte statische Routen
};

module.exports = nextConfig;
