const Path = require("path");
const common = require("./webpack.common.js");
const {merge} = require("webpack-merge");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new Dotenv({
			path: Path.resolve(__dirname, '../.env')
		}),
  ],
  devServer: {
    historyApiFallback: true, //route refresh fallback in devserver
  },
  module:{
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader"
        ],
      },
    ]
  }
});