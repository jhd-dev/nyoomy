const jsPluginRules = require('../rulesets/js-plugin-rules');
const jsRules = require('../rulesets/js-rules');
const tsRules = require('../rulesets/ts-rules');
const jsOverrides = require('./js-override');

const baseExtends = [
    ...jsOverrides[0].extends.filter((config) => config !== 'prettier'),
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:type-graphql/recommended',
];
const tsExtends = [...baseExtends, 'prettier'];
const tsTestExtends = [
    ...baseExtends,
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'prettier',
];

module.exports = [
    {
        files: ['*.ts', '*.tsx'],
        extends: tsExtends,
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            project: ['tsconfig-eslint.json', '**/tsconfig.json'],
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
            ...tsRules,
        },
    },
    {
        files: ['*.test.ts', '*.test.tsx'],
        extends: tsTestExtends,
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
        files: ['**/scripts/*.ts'],
        extends: tsExtends,
        rules: {
            ...jsRules,
            ...jsPluginRules,
            ...tsRules,
            'node/shebang': 'off',
        },
    },
];
