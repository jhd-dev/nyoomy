import { ENV_FILENAME, NODE_ENV, PORT, __prod__ } from '@nyoomy/global';
import DotenvPlugin from 'dotenv-webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve, relative } from 'path';
import type { Configuration } from 'webpack';
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack';

const ROOT: string = '../..';
const relativeEnvFile: string = resolve(__dirname, ROOT, ENV_FILENAME);

console.info(`Using env file: ${relativeEnvFile}`);
console.info(`process.env.NODE_ENV: ${NODE_ENV}`);
console.info(`process.env.PORT: ${String(PORT)}`);

const config: Configuration = {
    mode: __prod__ ? 'production' : 'development',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        // publicPath: "./public"
    },
    entry: './src/view/index.tsx',
    devtool: 'inline-source-map',
    watch: !__prod__,
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: resolve(
                                    __dirname,
                                    'postcss.config.json'
                                ),
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|ico|json)$/i,
                type: 'asset/resource',
                // https://webpack.js.org/configuration/output/#outputfilename
                // generator: "[file]"
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        fallback: { fs: false, path: false },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            // manifest: "public/manifest.json",
        }),
        new ForkTsCheckerWebpackPlugin({ async: false }),
        new HotModuleReplacementPlugin(),
        new ESLintWebpackPlugin({
            context: relative(resolve(__dirname, 'src/view'), __dirname),
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV ?? 'development'),
        }),
        new DotenvPlugin({
            path: relativeEnvFile,
            safe: true,
            ignoreStub: true,
        }),
    ],
    stats: { errorDetails: !__prod__ },
    devServer: __prod__
        ? undefined
        : {
              contentBase: join(__dirname, 'dist'),
              historyApiFallback: true,
              port: PORT,
              open: true,
              hot: true,
          },
};

export default config;
