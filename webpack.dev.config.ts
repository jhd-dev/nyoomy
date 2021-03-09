import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        //publicPath: "./public"
    },
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico|json)$/i,
                type: "asset/resource",
                //generator: "[file]" // https://webpack.js.org/configuration/output/#outputfilename
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            //filename: "./dist/index.html",
            //favicon: "public/favicon.ico",
            //manifest: "public/manifest.json",
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
};

export default config;
