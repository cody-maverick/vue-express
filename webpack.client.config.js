const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';

const webpack = require('webpack')

module.exports = merge(baseConfig, {
    entry: ['./src/entry-client.js', 'webpack-hot-middleware/client'],
    output: {
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [

        ]
    },
    plugins:
        [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ]
})