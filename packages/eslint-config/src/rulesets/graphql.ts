import { defineConfig } from 'eslint-define-config';
import { graphQLFiles } from '../utils/file-extensions.json';

export default defineConfig({
    parser: '@graphql-eslint/eslint-plugin',
    parserOptions: {
        skipGraphQLConfig: true,
    },
    plugins: ['@graphql-eslint'],
    overrides: [
        {
            files: graphQLFiles,
            rules: {
                '@graphql-eslint/no-hashtag-description': ['error'],
            },
        },
    ],
});
