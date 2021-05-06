module.exports = [
    {
        files: ['*.yml', '*.yaml'],
        extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
        rules: {
            'yml/require-string-key': 'error',
        },
    },
];
