import { defineConfig } from 'eslint-define-config';
import { typescriptTestFiles } from '../utils/file-extensions.json';

export default defineConfig({
    plugins: ['jest', 'jest-dom'],
    overrides: [
        {
            files: typescriptTestFiles,
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
});
