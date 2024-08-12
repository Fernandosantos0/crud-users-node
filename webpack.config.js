const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './frontend/main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: 'bundle.min.js'
    },
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
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
};