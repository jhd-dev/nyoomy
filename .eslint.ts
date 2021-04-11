/**
 * The configuration options for ESLint. Set up with the intention of focusing ESLint on the
 * content of the code, and Prettier on the formatting.
 */
export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint', // Disables ESLint rules that conflict with Prettier
        'plugin:prettier/recommended', // Should always be the final config in the "extends" array
    ],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'max-classes-per-file': 1,
        'no-eval': true,
        'no-invalid-this': true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
