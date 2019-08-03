var path = require('path');
var webpack = require('webpack');
// entry: the file to which all other things are connected
//output point: 
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'false',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dist.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', "eslint-loader"],
        
        
      },
    ],
  },
  plugins: [],
};