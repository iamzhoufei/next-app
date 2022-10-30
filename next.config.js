/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  env: {
    WEATHER_API_KEY: '2429d6c34e15ea209483243e93f393da',
  },
  reactStrictMode: true,
  swcMinify: true,
  // 支持sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'babel-loader',
        },
        // 将svg图标转为组件
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
            icon: true,
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig
