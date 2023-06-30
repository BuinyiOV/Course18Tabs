'use strict';

var path = require('path');

module.exports = {
  mode: 'development',
  entry: './18 Food/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/18 Food/js'
  },
  watch: true,
  devtool: "source-map",
  module: {}
};