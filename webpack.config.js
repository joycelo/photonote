const path = require('path');

module.exports = {
    entry: './client/components/App.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    devServer: {
        publicPath: '/build/',
        proxy: {
            '/api/leaders': 'http://localhost:3000',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: './index.html',
    //         filename: './index.html',
    //     }),
    //     new CopyPlugin([
    //         { from: './src/style.css' },
    //     ]),
    // ],
};