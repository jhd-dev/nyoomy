import { defineConfig } from 'eslint-define-config';
import { reactFiles } from '../utils/file-extensions.json';

export default defineConfig({
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    overrides: [
        {
            files: reactFiles,
            extends: ['plugin:react/recommended'],
            rules: {
                'react-hooks/rules-of-hooks': 'error',
                'react-hooks/exhaustive-deps': 'warn',
                'react/prop-types': 'off',
                'react/jsx-filename-extension': [
                    'error',
                    { extensions: ['.tsx'] },
                ],
            },
        },
    ],
});
