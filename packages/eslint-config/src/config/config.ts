// import graphQLOverrides from '../overrides/graphql-override';
import htmlOverrides from '../overrides/html-override';
import jsOverrides from '../overrides/js-override';
import jsonOverrides from '../overrides/json-override';
import tsOverrides from '../overrides/ts-override';
import yamlOverrides from '../overrides/yaml-override';

export default {
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
