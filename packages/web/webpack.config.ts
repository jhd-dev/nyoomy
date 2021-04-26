import { config as dotenvConfig } from 'dotenv';
import DotenvPlugin from 'dotenv-webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve, relative } from 'path';
import {
    Configuration,
    HotModuleReplacementPlugin,
    DefinePlugin,
} from 'webpack';

dotenvConfig({
    path: resolve(__dirname, '.env.local'),
});

const isProd: boolean = process.env.NODE_ENV === 'production';

console.log(resolve(__dirname, '.env.local'));
console.log(`process.env.NODE_ENV: ${String(process.env.NODE_ENV)}`);
console.log(`process.env.PORT: ${String(process.env.PORT)}`);

const config: Configuration = {
    mode: isProd ? 'production' : 'development',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        // publicPath: "./public"
    },
    entry: './src/view/index.tsx',
    devtool: 'inline-source-map',
    watch: !isProd,
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
                        options: {
                            importLoaders: 1,
                        },
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
        fallback: {
            fs: false,
            path: false,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            // manifest: "public/manifest.json",
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new HotModuleReplacementPlugin(),
        new ESLintWebpackPlugin({
            context: relative(resolve(__dirname, 'src/view'), __dirname),
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV ?? 'development'
            ),
        }),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        new DotenvPlugin({
            path: resolve(__dirname, '.env.local'),
            safe: true,
            ignoreStub: true,
        }),
    ],
    stats: {
        errorDetails: !isProd,
    },
    // devServer: {
    //     contentBase: join(__dirname, 'dist'),
    //     historyApiFallback: true,
    //     port: 4000,
    //     open: true,
    //     hot: true,
    // },
};

export default config;
