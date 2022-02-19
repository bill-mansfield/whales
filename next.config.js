module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    config.module.rules.push(
      {
        test: /\.(otf|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          encode: false,
          limit: 100000,
        }
      }
    );
    return config;
  },
}
