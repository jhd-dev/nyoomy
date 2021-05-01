module.exports = {
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'always',
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
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-jsdoc': 'off',
    'node/no-missing-import': 'off',
    'node/no-path-concat': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
};
