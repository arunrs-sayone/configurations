const Path = require("path");
const common = require("./webpack.common.js");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s?css/i,
        use: [
                MiniCssExtractPlugin.loader, 
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    },
                }, 
                "sass-loader"
            ],
      }
    ],
  },
});