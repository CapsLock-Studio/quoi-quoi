
const withCss = require('@zeit/next-css');
const path = require('path');

module.exports = withCss({
  webpack: (oringinConfig) => {
    const config = {
      ...oringinConfig,
      resolve: {
        alias: {
          components: path.resolve(__dirname, 'components'),
          qredux: path.resolve(__dirname, 'redux'),
        },
        extensions: ['.js', '.jsx'],
      },
    };

    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});
