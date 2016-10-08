const webpack = require('webpack');

const path = require('path')


const cfg = require('./webpack.config.js')

module.exports = Object.assign({}, cfg, {
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
})
