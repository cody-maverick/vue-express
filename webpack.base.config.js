const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // включаем извлечение CSS
                    extractCSS: true
                }

            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ],

    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new VueLoaderPlugin()
    ],

}
