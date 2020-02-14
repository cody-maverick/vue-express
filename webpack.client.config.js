const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';
const autoprefixer = require('autoprefixer');

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    output: {
        sourceMapFilename: '[name].js.map',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ],
            },
        ]
    },
    plugins:
        IS_DEV ?
            [
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                }),
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                })

            ] : [
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                }),
            ],

    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 9000,
        liveReload: true
    }
})