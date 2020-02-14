const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {sourceMap: IS_DEV}
                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: IS_DEV}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: IS_DEV}
                    },
                ]
            },
        ],

    },
    devtool: IS_DEV ? 'source-map' : '',
    plugins: [
        new VueLoaderPlugin()
    ]
}
