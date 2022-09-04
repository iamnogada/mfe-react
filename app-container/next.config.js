const packageJsonDeps = require("./package.json").dependencies

const { ModuleFederationPlugin } = require('webpack').container;
const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');
const plugin = new ModuleFederationPlugin({
  name: "container",
  remotes: {
    remoteApp: `promise new Promise(resolve => {
      const urlParams = new URLSearchParams(window.location.search)
      console.log('urlParams'+urlParams)
      const version = urlParams.get('app1VersionParam')
      // This part depends on how you plan on hosting and versioning your federated modules
      const remoteUrlWithVersion = 'http://localhost:3001/remote.js'
      const script = document.createElement('script')
      script.src = remoteUrlWithVersion
      script.onload = () => {
        // the injected script has loaded and is available on window
        // we can now resolve this Promise
        const proxy = {
          get: (request) => window.remoteApp.get(request),
          init: (arg) => {
            try {
              return window.remoteApp.init(arg)
            } catch(e) {
              console.log('remote container already initialized')
            }
          }
        }
        resolve(proxy)
      }
      // inject this script with the src set to the versioned remoteEntry.js
      document.head.appendChild(script);
    })
    `,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.plugins.push(
      plugin
    );
    return config;
  }
}

module.exports = nextConfig
