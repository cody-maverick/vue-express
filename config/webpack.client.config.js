const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/public',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: (isProduction ?
            [
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                }),
            ] : [
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    hmr: true,
                }),
                new webpack.HotModuleReplacementPlugin(),
            ]
    )
})