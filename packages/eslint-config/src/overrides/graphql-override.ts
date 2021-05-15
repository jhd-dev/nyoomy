import { ERROR } from '../types/severity';

export default [
    {
        files: ['*.graphql', '*.gql'],
        parser: '@graphql-eslint/eslint-plugin',
        parserOptions: {
            skipGraphQLConfig: true,
        },
        rules: {
            '@graphql-eslint/no-hashtag-description': [ERROR],
        },
    },
];
