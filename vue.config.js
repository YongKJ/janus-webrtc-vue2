const webpack = require('webpack');
const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ],
        resolve: {
            fallback: {
                "fs": false,
                "util": false,
                "path": false,
                "assert": false
            }
        }
    }
})
