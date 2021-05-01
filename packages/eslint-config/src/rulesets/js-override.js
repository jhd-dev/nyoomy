const jsPluginRules = require('./js-plugin-rules');
const jsRules = require('./js-rules');
const tsRules = require('./ts-rules');

module.exports = {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsdoc/recommended',
        'plugin:monorepo/recommended',
        'plugin:node/recommended',
        'plugin:pii/recommended',
        'plugin:regexp/recommended',
        'plugin:editorconfig/noconflict',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['tsconfig-eslint.json'],
        extraFileExtensions: ['.json'],
        ecmaFeatures: { jsx: true },
    },
    env: { es6: true },
    settings: {
        jsdoc: { mode: 'typescript' },
        react: { pragma: 'React', version: 'detect' },
    },
    rules: {
        ...jsRules,
        ...jsPluginRules,
    },
    overrides: [
        {
            files: ['*.ts, *.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
            ],
            rules: {
                ...jsRules,
                ...jsPluginRules,
                ...tsRules,
            },
        },
        {
            files: ['*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:jest-dom/recommended',
            ],
            env: {
                'es6': true,
                'jest/globals': true,
            },
            rules: {
                ...jsRules,
                ...jsPluginRules,
                ...tsRules,
                'jest/require-top-level-describe': 'error',
            },
        },
        {
            files: ['**/eslint-config/**/*.js'],
            rules: {
                ...jsRules,
                ...jsPluginRules,
                'sort-keys': ['error', 'asc', { minKeys: 10 }],
            },
        },
    ],
};
