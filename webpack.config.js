const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devserver = require('./webpack/devserver');
const sassdev = require('./webpack/sassdev');
const sassprod = require('./webpack/sassprod');

const common = {
  entry:{
    index: './client/index.js'
  },
   output: {
    path: __dirname + '/public',
    filename: 'js/[name].js',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|svg)$/, 
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'client/',
          outputPath: 'images/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: './style/[name].css',
    })
  ]
};

module.exports = function (env){
 if(env === 'production'){
   return merge([
     common,
     sassprod()
    ]);
 }
 if(env === 'development'){
    return merge([
      common,
      devserver(),
      sassdev()
    ]);
 }
};