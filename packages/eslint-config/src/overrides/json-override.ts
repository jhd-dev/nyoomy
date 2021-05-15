import { WARN, ERROR } from '../types/severity';

export default [
    {
        files: ['*.json', '*.jsonc'],
        extends: ['plugin:json/recommended-with-comments'],
        rules: {
            'json/*': [WARN, { allowComments: true }],
            'json/duplicate-key': ERROR,
            'json/trailing-comma': ERROR,
        },
    },
];
