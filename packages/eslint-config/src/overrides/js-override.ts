import type { EslintConfig } from 'eslint-define-config';
import jsRules from '../rulesets/js-rules';

const baseExtends: string[] = [
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
const jsExtends: string[] = [...baseExtends, 'prettier'];

const jsOptions: EslintConfig = {
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
};

export default [
    {
        files: ['*.js', '*.jsx'],
        extends: jsExtends,
        ...jsOptions,
        rules: { ...jsRules },
    },
];
