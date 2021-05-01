import { typescriptFiles } from '../utils/file-extensions.json';

export default {
    plugins: ['@typescript-eslint', 'import', 'jsdoc'],
    settings: {
        jsdoc: {
            mode: 'typescript',
        },
    },
    overrides: [
        {
            files: typescriptFiles,
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: ['tsconfig-eslint.json'],
                extraFileExtensions: ['.json'],
                ecmaFeatures: {
                    jsx: true,
                    modules: true,
                },
            },
            env: {
                es6: true,
            },
            extends: [
                'airbnb',
                'airbnb/hooks',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
            ],
            rules: {
                '@typescript-eslint/typedef': [
                    'warn',
                    {
                        arrayDestructuring: true,
                        arrowParameter: true,
                        memberVariableDeclaration: true,
                        objectDestructuring: false,
                        parameter: true,
                        propertyDeclaration: true,
                        variableDeclaration: true,
                        variableDeclarationIgnoreFunction: true,
                    },
                ],
                '@typescript-eslint/explicit-member-accessibility': 'error',
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/no-inferrable-types': 'off',
                '@typescript-eslint/no-require-imports': 'warn',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/prefer-includes': 'warn',
                '@typescript-eslint/prefer-readonly': 'warn',
            },
        },
    ],
};
