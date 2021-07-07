import developmentConfig from './webpack.dev';
import productionConfig from './webpack.prod';
import type { Configuration } from 'webpack';

interface IWebpackEnv {
    development?: boolean;
    production?: boolean;
}

export default (env: IWebpackEnv): Configuration => {
    if (env?.development) {
        console.info('Building for development.');
        return developmentConfig;
    }
    if (env?.production) {
        console.info('Building for production.');
        return productionConfig;
    }
    throw new Error(
        'Please specify webpack "--env development" or "--env production"'
    );
};
