module.exports = {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: [
                '**/packages/*/*.js',
                '**/packages/*/*.ts',
                '**/scripts/*.ts',
                '**/*.test.ts',
                '**/*.test.tsx',
            ],
        },
    ],
    'import/no-unresolved': 'off',
    'node/no-unpublished-require': 'off',
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
    'import/prefer-default-export': 'off',
    'inclusive-language/use-inclusive-words': 'warn',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-jsdoc': 'off',
    'node/no-missing-import': 'off',
    'node/no-path-concat': 'error',
    'node/prefer-global/console': 'error',
    'node/no-process-env': 'error',
    'node/no-process-exit': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/shebang': 'error',
    'promise/prefer-await-to-then': 'warn',
    'promise/prefer-await-to-callbacks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
};
