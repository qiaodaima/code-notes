const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/js/a.js',
    about: './src/js/b.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          },
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true
    })
  ],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 3000,
    open: true
  }
};
