
const path = require("path");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "main-bundled.js"
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {helperDirs: path.resolve(__dirname, "./dist/js/helpers")}
        }]
      }
    ]
  }
};