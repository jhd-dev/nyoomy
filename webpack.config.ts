import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { NODE_ENV } from './src/server/config/env';

const dev = (NODE_ENV === "development");

const config: Configuration = {
    mode: dev ? "development" : "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        //publicPath: "./public"
    },
    entry: "./src/client/view/index.tsx",
    watch: true,
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        },
                    },
                    "sass-loader",
                    ...(dev ? [] : [{
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: __dirname + "/utils/postcss.config.js",
                            },
                        },
                    }]),
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
        new HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
    ],
    devtool: "inline-source-map",
    /*devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },*/
};

export default config;
