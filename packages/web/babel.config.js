module.exports = (api) => {
    api.assertVersion(7);
    api.cache(true);
    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
            '@babel/preset-flow',
        ],
        plugins: [
            ['@babel/plugin-transform-runtime', { regenerator: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties'],
            'transform-class-properties',
        ],
    };
};
