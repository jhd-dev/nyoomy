import { ERROR, OFF } from '../types/severity';

export default [
    {
        files: ['*.html'],
        parser: '@html-eslint/parser',
        extends: ['plugin:@html-eslint/recommended'],
        rules: {
            '@html-eslint/no-extra-spacing-attrs': OFF,
            '@html-eslint/require-closing-tags': [
                ERROR,
                { selfClosing: 'always' },
            ],
        },
    },
];
