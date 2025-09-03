const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/[name].[contenthash].js",
        clean: true,
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@assets": path.resolve(__dirname, "src/assets")
        }
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
            { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(png|jpg|jpeg|gif|svg|webp)$/i, type: "asset", generator: { filename: "assets/[hash][ext][query]" } },
            { test: /\.(woff2?|ttf|eot)$/i, type: "asset/resource", generator: { filename: "assets/[hash][ext][query]" } }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    devServer: {
        port: 5173,
        open: true,
        hot: true,
        historyApiFallback: true,
        static: { directory: path.resolve(__dirname, "public") }
    }
};
