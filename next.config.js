const path = require('path');
require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {

    // Configurações específicas para carregar variáveis de ambiente
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    // Configurações de otimização (opcional)
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
          // Example configuration for splitting code into chunks
          common: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  reactStrictMode: true,
};
