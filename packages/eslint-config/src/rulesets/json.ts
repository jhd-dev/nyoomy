import { defineConfig } from 'eslint-define-config';
import { jsonFiles } from '../utils/file-extensions.json';

export default defineConfig({
    plugins: ['json'],
    overrides: [
        {
            files: jsonFiles,
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
    ],
});
