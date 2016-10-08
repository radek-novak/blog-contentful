"use strict";
var path = require('path');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";


module.exports = {
    entry: [
        `./src/index.js`
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.scss']
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      }, {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
    },
    devServer: {
        contentBase: ".",
        // do not print bundle build stats
        // noInfo: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
};
