import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import type { Configuration } from 'webpack';

const staticPath = resolve(__dirname, 'public');

export default merge<Configuration>(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(staticPath, 'index.html'),
            favicon: resolve(staticPath, 'favicon.ico'),
            manifest: resolve(staticPath, 'manifest.json'),
            filename: 'index.html',
            title: 'Nyoomy',
            inject: 'body',
            scriptLoading: 'defer',
            cache: true,
            minify: false,
        }),
    ],
    stats: { errorDetails: true },
});
