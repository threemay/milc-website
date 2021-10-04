const path = require("path");
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { PROJECT_PATH } = require("../constant");
const { isDevelopment, isProduction } = require("../env");

const getCssLoaders = () => {
  const cssLoaders = [
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "[local]--[hash:base64:5]",
        },
        sourceMap: isDevelopment,
      },
    },
  ];

  isProduction &&
    cssLoaders.push({
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            isProduction && [
              "postcss-preset-env",
              {
                autoprefixer: {
                  grid: true,
                },
              },
            ],
          ],
        },
      },
    });

  return cssLoaders;
};

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, "./src/index.js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, "./public/index.html"),
    }),
    new WebpackBar({
      name: "Link Start!!!",
      color: "#52c41a",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...getCssLoaders()],
      },
    ],
  },
};
