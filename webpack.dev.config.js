const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/styles/normalize.css"),
          to: "",
        },
        {
          from: path.resolve(__dirname, "src/styles/style.css"),
          to: "",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "/public/index.html"),
      filename: "./index.html",
    }),
  ],
};
