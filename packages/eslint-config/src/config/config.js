// Workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

// var graphQLOverrides = require('../overrides/graphql-override');
const htmlOverrides = require('../overrides/html-override');
const jsOverrides = require('../overrides/js-override');
const jsonOverrides = require('../overrides/json-override');
const tsOverrides = require('../overrides/ts-override');
const yamlOverrides = require('../overrides/yaml-override');

module.exports = {
    plugins: [
        '@typescript-eslint',
        // '@graphql-eslint',
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
        'type-graphql',
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
        // ...graphQLOverrides,
    ],
};
