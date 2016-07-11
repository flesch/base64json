'use strict';

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: [path.resolve(__dirname, 'index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test:/\.js$/, loader:'babel', exclude:/node_modules/ },
      { test:/\.json$/, loader:'json' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ comments:false, compress:{ warnings:false } })
  ]
};
