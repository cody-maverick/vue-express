const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const path = require('path')

module.exports = merge(baseConfig, {
    entry: './src/entry-client.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        liveReload: true
    }
})