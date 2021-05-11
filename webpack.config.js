const HtmlWebpackPlugins = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugins({ template: 'index.html' }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },


        ],
    },
    devServer: {
        port: 3001
    }
};
