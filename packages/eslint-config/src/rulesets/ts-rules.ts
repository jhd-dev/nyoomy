import { OFF, WARN, ERROR } from '../types/severity';
import jsRules from './js-rules';

/**
 * ESLint rules for TypeScript files.
 */
export default {
    ...jsRules,
    'no-use-before-define': OFF,
    '@typescript-eslint/array-type': [
        ERROR,
        { default: 'array-simple', readonly: 'array-simple' },
    ],
    '@typescript-eslint/ban-ts-comment': [
        ERROR,
        {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            'minimumDescriptionLength': 10,
        },
    ],
    '@typescript-eslint/consistent-type-assertions': [
        ERROR,
        {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
        },
    ],
    '@typescript-eslint/consistent-type-imports': [
        ERROR,
        { prefer: 'type-imports', disallowTypeAnnotations: true },
    ],
    'dot-notation': OFF,
    '@typescript-eslint/dot-notation': ERROR,
    '@typescript-eslint/explicit-member-accessibility': ERROR,
    '@typescript-eslint/no-base-to-string': [
        ERROR,
        { ignoredTypeNames: ['RegExp', 'URL', 'URLSearchParams'] },
    ],
    '@typescript-eslint/no-dynamic-delete': ERROR,
    '@typescript-eslint/no-explicit-any': WARN,
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/no-require-imports': WARN,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/no-this-alias': ERROR,
    '@typescript-eslint/no-unsafe-argument': ERROR,
    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/prefer-includes': WARN,
    '@typescript-eslint/prefer-literal-enum-member': ERROR,
    '@typescript-eslint/prefer-nullish-coalescing': ERROR,
    '@typescript-eslint/prefer-optional-chain': WARN,
    '@typescript-eslint/prefer-readonly': WARN,
    '@typescript-eslint/prefer-reduce-type-parameter': WARN,
    '@typescript-eslint/prefer-ts-expect-error': WARN,
    '@typescript-eslint/prefer-string-starts-ends-with': ERROR,
    '@typescript-eslint/restrict-template-expressions': [
        ERROR,
        {
            allowNumber: true,
            allowBoolean: false,
            allowAny: false,
            allowNullish: false,
        },
    ],
    '@typescript-eslint/require-array-sort-compare': [
        ERROR,
        { ignoreStringArrays: true },
    ],
    '@typescript-eslint/typedef': [
        WARN,
        {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: false,
        },
    ],
};
