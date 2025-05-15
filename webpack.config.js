const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true, // Clean the output directory before each build
    assetModuleFilename: "[name][ext]", // Output path for assets
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    open: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/,
      //     type: "asset/resource",
      //   }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
