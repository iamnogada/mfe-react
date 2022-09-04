/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    // console.log(options.webpack);
    return config
  },
}

module.exports = nextConfig
