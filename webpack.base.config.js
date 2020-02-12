const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // включаем извлечение CSS
                    // extractCSS: true,
                    sourceMap: IS_DEV
                }

            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: `babel-loader`,
                        options: {sourceMaps: IS_DEV}
                    }
                ],

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
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    performance: {
        hints: false
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new VueLoaderPlugin()
    ]
}
