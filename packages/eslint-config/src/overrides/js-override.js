const jsPluginRules = require('../rulesets/js-plugin-rules');
const jsRules = require('../rulesets/js-rules');

const baseExtends = [
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
    'plugin:sonarjs/recommended',
    'plugin:security-node/recommended',
    'plugin:array-func/recommended',
    'plugin:eslint-comments/recommended',
];
const jsExtends = [...baseExtends, 'prettier'];

module.exports = [
    {
        files: ['*.js', '*.jsx'],
        extends: jsExtends,
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
        },
    },
];
