// When webpack makes a new JavaScript file, it needs to make a new HTML file as well.
// That way the file paths for running the scripts will still be correct if the files
// are in the same folder together

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
// template's value should be a filepath to the current HTML file, the one that you're trying to copy and move
  template: __dirname + '/app/index.html',
// The name for the newly created file:
  filename: 'index.html',
// inject value should be be a string: either 'head' or 'body'.
// You are telling Webpack where the script for the index.js file will be (head/body)
  inject: 'body'
});
// Webpack needs to know three things:
// What JavaScript file it should transform.
// Which transformations it should use on that file.
// Where the new, transformed file should go.

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    // Each "loader" that you add to the loaders array will represent a transformation that your code will go through before reaching the browser.
    loaders: [
      {
        // each loader object needs a property called test.
        // The regex is searching all js files so that it transforms them all
        test: /\.js$/,
        // You can then add an exclude or include property to specify
        // files that don't fit the regex but you do or don't want including
        exclude: /node_modules/,
        // The final property is the loader which specifies the particular
        // transformation to be performed
        loader: 'babel-loader'
      }
    ]
  },
  // Where the transformed JS file should be saved
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};
