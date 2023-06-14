const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); //native dependency for resolving absolute paths

const rulesForJs = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"],
  },
};

const rulesForCss = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};
const rules = [rulesForJs, rulesForCss];

module.exports = {
  //entry : './src/index.js'   by default
  output: {
    //filename : 'main.js'   by default
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: rules,
  },
  devServer: {
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
