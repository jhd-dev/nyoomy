import type { EslintConfig } from 'eslint-define-config';
import tsRules from '../rulesets/ts-rules';
import { excludePrettier } from '../utils/exclude-prettier';
import jsOverrides from './js-override';

const baseExtends: string[] = [
    ...excludePrettier(jsOverrides[0].extends as string[]),
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:type-graphql/recommended',
];
const tsExtends: string[] = [...baseExtends, 'prettier'];
const tsTestExtends: string[] = [
    ...baseExtends,
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'prettier',
];
const tsOptions: Partial<EslintConfig> = {
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
        files: ['*.ts', '*.tsx'],
        extends: tsExtends,
        ...tsOptions,
        rules: { ...tsRules },
    },
    {
        files: ['*.test.ts', '*.test.tsx'],
        extends: tsTestExtends,
        ...tsOptions,
        env: {
            'es6': true,
            'jest/globals': true,
        },
        rules: {
            ...tsRules,
            'jest/require-top-level-describe': 'error',
        },
    },
    {
        files: ['**/scripts/*.ts'],
        extends: tsExtends,
        ...tsOptions,
        rules: {
            ...tsRules,
            'node/shebang': 'off',
        },
    },
];
