import restrictedGlobals from 'confusing-browser-globals';

/**
 * Core Javascript ESLint rules.
 */
export default {
    'class-methods-use-this': 'off',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'max-classes-per-file': ['warn', 1],
    'max-len': ['warn', { code: 100, tabWidth: 4, ignoreStrings: false }],
    'no-eval': 'error',
    'no-invalid-this': ['error', { capIsConstructor: false }],
    'no-lonely-if': 'warn',
    'no-param-reassign': 'error',
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': 'error',
    'no-var': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'prefer-arrow-callback': 'warn',
    'prefer-rest-params': 'error',
    'require-await': 'error',
    'no-console': ['warn', { allow: ['error', 'warn', 'info'] }],
    'global-require': 'off',
};
