const webpack = require('webpack');

module.exports = {
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
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000, 
    proxy: {
      '*':'http://localhost:8080'
    }
  }
};