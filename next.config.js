const path = require('path');

module.exports = {
  webpack: config => Object.assign(
    {},
    config,
    {
      resolve: {
        alias: {
          components: path.resolve(__dirname, 'components'),
          qredux: path.resolve(__dirname, 'redux'),
        },
        extensions: ['.js', '.jsx'],
      },
    }
  ),
};
