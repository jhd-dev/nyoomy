import { OFF, WARN, ERROR } from '../types/severity';

/**
 * JavaScript ESLint rules from external plugins.
 */
export default {
    'eslint-comments/disable-enable-pair': [ERROR, { allowWholeFile: true }],
    'import/extensions': [
        ERROR,
        'ignorePackages',
        { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
        ERROR,
        {
            devDependencies: [
                '**/packages/*/*.*',
                '**/packages/*/tools/*.*',
                '**/scripts/*.*',
                '**/*.test.*',
                '*.config.*',
            ],
        },
    ],
    'import/no-unresolved': OFF,
    'import/order': [
        ERROR,
        {
            'groups': [
                ['builtin', 'external', 'internal'],
                'parent',
                'index',
                'sibling',
                'object',
            ],
            'pathGroups': [
                { pattern: '@nyoomy/**', group: 'internal' },
                { pattern: 'react', group: 'external', position: 'before' },
            ],
            'pathGroupsExcludedImportTypes': ['builtin'],
            'newlines-between': 'never',
            'alphabetize': { order: 'asc', caseInsensitive: false },
        },
    ],
    'import/prefer-default-export': OFF,
    'import/no-webpack-loader-syntax': ERROR,
    'inclusive-language/use-inclusive-words': WARN,
    'jsdoc/no-undefined-types': OFF,
    'jsdoc/require-jsdoc': OFF,
    'node/no-missing-import': OFF,
    'node/no-path-concat': ERROR,
    'node/no-process-env': ERROR,
    'node/no-process-exit': ERROR,
    'node/no-unpublished-import': OFF,
    'node/no-unpublished-require': OFF,
    'node/no-unsupported-features/es-syntax': OFF,
    'node/prefer-global/console': ERROR,
    'node/shebang': ERROR,
    'promise/prefer-await-to-then': WARN,
    'promise/prefer-await-to-callbacks': WARN,
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
    'react/prop-types': OFF,
};
