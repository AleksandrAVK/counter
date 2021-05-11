const HtmlWebpackPlugins = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
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
