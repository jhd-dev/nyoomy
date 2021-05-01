// Workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

// var graphQLOverride = require('../rulesets/graphql-override');
const htmlOverride = require('../rulesets/html-override');
const jsOverride = require('../rulesets/js-override');
const jsonOverride = require('../rulesets/json-override');
const yamlOverride = require('../rulesets/yaml-override');

module.exports = {
    // extends: require('./utils/orderRulesets.ts').orderRulesets(),
    plugins: [
        '@typescript-eslint',
        // '@graphql-eslint',
        '@html-eslint',
        'import',
        'jsdoc',
        'jest',
        'jest-dom',
        'react',
        'react-hooks',
        'json',
        'inclusive-language',
        'jsdoc',
        'pii',
        'regexp',
    ],
    overrides: [
        jsOverride,
        jsonOverride,
        yamlOverride,
        htmlOverride,
        // graphQLOverride,
    ],
};
