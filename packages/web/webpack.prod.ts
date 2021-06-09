import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import { DefinePlugin } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import type { Configuration } from 'webpack';

const staticPath = resolve(__dirname, 'public');

export default merge<Configuration>(common, {
    mode: 'production',
    output: { clean: true },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                use: [MiniCssExtractPlugin.loader],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(staticPath, 'index.html'),
            favicon: resolve(staticPath, 'favicon.ico'),
            manifest: resolve(staticPath, 'manifest.json'),
            filename: 'index.html',
            title: 'Nyoomy',
            cache: false,
            inject: 'body',
            minify: true,
        }),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: ['...'],
    },
});
