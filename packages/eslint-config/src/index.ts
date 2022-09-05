import htmlOverrides from './overrides/html-override';
import jsOverrides from './overrides/js-override';
import jsonOverrides from './overrides/json-override';
import tsOverrides from './overrides/ts-override';
import yamlOverrides from './overrides/yaml-override';

module.exports = {
    plugins: [
        '@typescript-eslint',
        '@html-eslint',
        'import',
        'jsdoc',
        'jest',
        'jest-dom',
        'react',
        'react-hooks',
        'json',
        'inclusive-language',
        'jsdoc',
        'pii',
        'promise',
        'regexp',
        'node',
        'sonarjs',
        'security-node',
        'array-func',
        'eslint-comments',
    ],
    overrides: [
        ...jsOverrides,
        ...tsOverrides,
        ...jsonOverrides,
        ...yamlOverrides,
        ...htmlOverrides,
    ],
};
