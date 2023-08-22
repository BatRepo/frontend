const path = require('path');
require('dotenv').config();

module.exports = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // Configurações gerais do Webpack
    config.plugins.push(
      // Adicione aqui quaisquer plugins adicionais que você queira usar
    );

    // Configurações específicas para lidar com arquivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Configurações específicas para carregar variáveis de ambiente
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    // Configurações de otimização (opcional)
    if (!isServer && !dev) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
    }

    // Retorna a configuração finalizada
    return config;
  },
  reactStrictMode: true,
};
