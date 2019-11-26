// npm install -D webpack webpack-cli babel-loader @babel/core @babel/preset-env
// npm install --save-dev html-webpack-plugin
// npm install webpack-dev-server --save-dev
// npm install --save-dev clean-webpack-plugin
// npm install --save-dev babel-polyfill
// npm install --save-dev @babel/plugin-transform-runtime
// npm install --save @babel/runtime

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets": "> 0.25%, not dead"
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            hash: true
        })
    ],
    devtool: 'source-map',
    devServer: {
        inline: true,
        port: 3000,
        open: true
    }
};

module.exports = config;
