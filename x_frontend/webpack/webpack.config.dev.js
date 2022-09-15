const Path = require('path');
const Webpack = require('webpack');
const {
  merge
} = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  output: {
    assetModuleFilename: "assets/[name][ext]",
  },
  devServer: {
    inline: true,
    hot: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new StylelintPlugin({
      files: Path.join('src', '**/*.js'),
      fix: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      }
    ],
  },
});