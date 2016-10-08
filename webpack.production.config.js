const path = require('path')

const cfg = require('./webpack.config.js')

module.exports =  Object.assign({}, cfg, {
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  }
})
