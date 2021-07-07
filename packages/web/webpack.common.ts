import DotenvPlugin from 'dotenv-webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { join, resolve } from 'path';
// import { ProgressPlugin } from 'webpack';
import type { Configuration } from 'webpack';

const ROOT: string = '../..';
const relativeEnvFile: string = resolve(__dirname, join(ROOT, './.env.local'));
const relativeEnvExampleFile: string = resolve(
    __dirname,
    join(ROOT, './.env.example')
);
const assetsDir = resolve(__dirname, '../../assets');

console.info(`Using env file: ${relativeEnvFile}`);

const config: Configuration = {
    name: 'web-configuration',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    entry: { app: './src/index.tsx' },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { babelrc: true },
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
                                config: resolve(__dirname, 'postcss.config.js'),
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|ico|json)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.scss', '...'],
        alias: { Assets: assetsDir },
        fallback: {
            fs: false,
            os: false,
            path: false,
            util: false,
            url: false,
        },
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({ async: false }),
        new DotenvPlugin({
            path: relativeEnvFile,
            safe: relativeEnvExampleFile,
            ignoreStub: true,
        }),
        // new ProgressPlugin((percentage, message, ...args) => {
        //     console.info(percentage, message, ...args);
        // }),
    ],
};

export default config;
