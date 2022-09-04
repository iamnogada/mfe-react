const packageJsonDeps = require("./package.json").dependencies


const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        remotes: {
          remoteApp: "remoteApp@http://localhost:3001/remote.js"
        },
      })
    );
    return config;
  }
}

module.exports = nextConfig
