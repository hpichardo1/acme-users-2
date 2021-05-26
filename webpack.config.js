const { LibManifestPlugin } = require("webpack");

module.exports = {
  //what we want to import to Webpack. What file you want webPack to bundle.
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }, 
  mode: 'development'
}