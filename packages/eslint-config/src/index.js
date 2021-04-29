module.exports = {
    // extends: require('./utils/orderRulesets.ts').orderRulesets(),
    plugins: [
        '@typescript-eslint',
        '@html-eslint',
        '@graphql-eslint',
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
        'regexp',
    ],
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: ['tsconfig-eslint.json'],
                extraFileExtensions: ['.json'],
                ecmaFeatures: {
                    jsx: true,
                },
            },
            extends: [
                'eslint:recommended',
                'airbnb',
                'airbnb/hooks',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
                'plugin:react/recommended',
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:jsdoc/recommended',
                'plugin:node/recommended',
                'plugin:pii/recommended',
                'plugin:regexp/recommended',
                'plugin:editorconfig/noconflict',
                'prettier',
            ],
            env: {
                es6: true,
            },
            settings: {
                jsdoc: {
                    mode: 'typescript',
                },
                react: {
                    pragma: 'React',
                    version: 'detect',
                },
            },
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
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
                'react/prop-types': 'off',
                'react/jsx-filename-extension': [
                    'error',
                    { extensions: ['.tsx'] },
                ],
            },
            overrides: [
                {
                    files: [
                        '*.test.js',
                        '*.test.jsx',
                        '*.test.ts',
                        '*.test.tsx',
                    ],
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
                        'jest/require-top-level-describe': 'error',
                    },
                },
            ],
        },
        {
            files: ['*.json', '*.jsonc'],
            extends: ['plugin:json/recommended-with-comments'],
            rules: {
                'json/*': [
                    'warn',
                    {
                        allowComments: true,
                    },
                ],
                'json/duplicate-key': 'error',
                'json/trailing-comma': 'error',
            },
        },
        {
            files: ['*.yml', '*.yaml'],
            extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
        },
        {
            files: ['*.html'],
            parser: '@html-eslint/parser',
            extends: ['plugin:@html-eslint/recommended'],
        },
        {
            files: ['*.graphql', '*.gql'],
            parser: '@graphql-eslint/eslint-plugin',
            parserOptions: {
                skipGraphQLConfig: true,
            },
            rules: {
                '@graphql-eslint/no-hashtag-description': ['error'],
            },
        },
    ],
};
