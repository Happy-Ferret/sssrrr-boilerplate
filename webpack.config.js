/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var dir_js = path.resolve(__dirname, 'client');
var dir_build = path.resolve(__dirname, 'assets');

module.exports = {
  entry: {
    app : path.resolve(dir_js, 'index.js')
  },
  devtool: 'source-map',
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', dir_js],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        presets : ['es2015', 'react']
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    colors: true
  }
};



