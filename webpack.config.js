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

const rulesForImages = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

const rules = [rulesForJs, rulesForCss, rulesForImages];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    //entry : './src/index.js'   by default
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: rules,
    },
    devServer: {
      port: 3000,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
    devtool: "inline-source-map",
    resolve: {
      alias: {
        "@googlemaps/js-api-loader": path.resolve(
          __dirname,
          "node_modules",
          "@googlemaps/js-api-loader"
        ),
      },
    },
  };
};
