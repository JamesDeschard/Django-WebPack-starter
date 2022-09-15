const Webpack = require('webpack');
const {
  merge
} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  bail: true,
  output: {
    assetModuleFilename: "assets/[name][ext]",
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
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