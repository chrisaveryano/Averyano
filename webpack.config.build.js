const path = require('path');

const { merge } = require('webpack-merge');

// Same as
// import config from "./webpack.config.js";
// because of node.js we use require
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.join(__dirname, 'public'),
  },
});
