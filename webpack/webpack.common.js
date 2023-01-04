const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      app: path.resolve(__dirname, '../src/index.tsx')
    },
    output: {
      path: path.resolve(__dirname, "../dist"), 
      publicPath: "/",
      filename: 'js/[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        
        {
            test: /\.(png|jpg|gif|svg|woff2|ttf|woff|eot)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CleanWebpackPlugin(),
    ],
  };