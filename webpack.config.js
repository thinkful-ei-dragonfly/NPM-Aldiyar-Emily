'use strict';


const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/assets/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};