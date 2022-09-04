/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "dist",
  webpack: (config, options) => {
    // console.log(options.webpack);
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "shell",
        filename: "remoteEntry.js",
        remoteType: "var",
        remotes: {},
        exposes: {},
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            }
          }
        ]
      })
    );
    return config
  },
}

module.exports = nextConfig
