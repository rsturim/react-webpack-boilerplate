const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const DIST = 'dist';
const DIST_PATH = path.join(__dirname, DIST);

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        hot: true,
        port: 3000,
        open: true,
        contentBase: DIST_PATH,
        historyApiFallback: true,
    },
    devtool: 'eval',
});
