import { ERROR } from '../types/severity';

export default [
    {
        files: ['*.yml', '*.yaml'],
        extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
        rules: {
            'yml/require-string-key': ERROR,
        },
    },
];
