const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};
