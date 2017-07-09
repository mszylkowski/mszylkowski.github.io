var webpack = require("webpack");
var path = require('path');

module.exports = {
	devtool: 'cheap-module-source-map',
	//devtool: 'env',
	entry: "./src/app.js",
	output: {
		filename:"build/bundle.js",
    sourceMapFilename: "build/bundle.map"
	},
	plugins: [
		//new webpack.optimize.UglifyJsPlugin({minimize: true}),
		//new webpack.DefinePlugin({
	  //  'process.env': {
	  //    'NODE_ENV': JSON.stringify('production')
	  //  }
	  //})
  ],
	module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: [ 'es2015', 'react'/*, 'react-hmre'*/ ]
      }
    }]
  },
}
