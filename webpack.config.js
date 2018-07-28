const webpack = require('webpack');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');

const common = {
  entry:{
    index: './client/index.js'
  },
   output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = function (env){
 if(env === 'production'){
   return merge([
     common
    ]);
 }
 if(env === 'development'){
    return merge([
      common,
      devserver(),
      sass()
    ]);
 }
};