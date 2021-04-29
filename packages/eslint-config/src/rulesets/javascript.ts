import { defineConfig } from 'eslint-define-config';
import { typescriptFiles } from '../utils/file-extensions.json';

export default defineConfig({
    plugins: ['import', 'inclusive-language', 'jsdoc', 'pii', 'regexp'],
    overrides: [
        {
            files: typescriptFiles,
            extends: [
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:jsdoc/recommended',
                'plugin:node/recommended',
                'plugin:pii/recommended',
                'plugin:regexp/recommended',
            ],
            rules: {
                'max-len': [
                    'warn',
                    {
                        code: 100,
                        tabWidth: 4,
                        ignoreStrings: false,
                    },
                ],
                'max-classes-per-file': ['warn', 1],
                'no-eval': 'error',
                'no-invalid-this': [
                    'error',
                    {
                        capIsConstructor: false,
                    },
                ],
                'no-return-await': 'error',
                'no-throw-literal': 'error',
                'require-await': 'error',
                'no-unused-expressions': 'error',
                'no-unneeded-ternary': [
                    'error',
                    {
                        defaultAssignment: false,
                    },
                ],
                'default-case-last': 'error',
                'default-param-last': 'error',
                'no-param-reassign': 'error',
                'no-lonely-if': 'warn',
                'prefer-rest-params': 'error',
                'no-var': 'error',
                'prefer-arrow-callback': 'warn',
                'eqeqeq': [
                    'error',
                    'always',
                    {
                        null: 'ignore',
                    },
                ],
                'jsdoc/no-undefined-types': 'off',
                'jsdoc/require-jsdoc': 'off',
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        mjs: 'never',
                        jsx: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
                'import/order': [
                    'error',
                    {
                        'groups': [
                            ['builtin', 'external'],
                            'internal',
                            ['sibling', 'parent', 'index'],
                            'object',
                        ],
                        'pathGroups': [
                            {
                                pattern: '@nyoomy/*',
                                group: 'internal',
                                position: 'after',
                            },
                        ],
                        'newlines-between': 'never',
                        'alphabetize': {
                            order: 'asc',
                            caseInsensitive: false,
                        },
                    },
                ],
                'inclusive-language/use-inclusive-words': 'warn',
                'node/no-path-concat': 'error',
                'node/no-unpublished-import': 'off',
            },
        },
    ],
});
