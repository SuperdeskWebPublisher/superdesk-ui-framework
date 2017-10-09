const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

module.exports = {
    options: webpackConfig,
    build: {
        plugins: webpackConfig.plugins.concat(
            new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}})
        )
    }
};