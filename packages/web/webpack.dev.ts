import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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
            cache: true,
            inject: false,
            minify: false,
        }),
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new BundleAnalyzerPlugin({ analyzerPort: 'auto', openAnalyzer: false }),
    ],
    stats: { errorDetails: true },
});
