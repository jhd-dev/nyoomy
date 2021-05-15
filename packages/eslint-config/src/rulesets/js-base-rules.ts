import restrictedGlobals from 'confusing-browser-globals';
import { OFF, WARN, ERROR } from '../types/severity';

/**
 * Core Javascript ESLint rules.
 */
export default {
    'class-methods-use-this': OFF,
    'default-case-last': ERROR,
    'default-param-last': ERROR,
    'eqeqeq': [ERROR, 'always', { null: 'ignore' }],
    'max-classes-per-file': [WARN, 1],
    'max-len': [WARN, { code: 100, tabWidth: 4, ignoreStrings: false }],
    'no-eval': ERROR,
    'no-invalid-this': [ERROR, { capIsConstructor: false }],
    'no-lonely-if': WARN,
    'no-param-reassign': ERROR,
    'no-restricted-globals': [ERROR, ...restrictedGlobals],
    'no-return-await': ERROR,
    'no-throw-literal': ERROR,
    'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],
    'no-unused-expressions': ERROR,
    'no-var': ERROR,
    'no-void': [ERROR, { allowAsStatement: true }],
    'prefer-arrow-callback': WARN,
    'prefer-rest-params': ERROR,
    'require-await': ERROR,
    'no-console': [WARN, { allow: ['error', 'warn', 'info'] }],
    'global-require': OFF,
};
