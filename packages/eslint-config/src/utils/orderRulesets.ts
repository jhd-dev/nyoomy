import type { Extends } from 'eslint-define-config/src/extends';

const RULESETS_DIR = './../rulesets/';
const RULESETS: string[] = [
    // 'editorconfig',
    // 'graphql',
    // 'json',
    // 'react',
    // 'tests',
    'typescript',
    'yaml',
];
const TO_PREPEND: string[] = ['eslint:recommended'];
const TO_APPEND: string[] = ['prettier'];

/**
 * Orders the eslint rulesets such that they do not unintentionally disrupt
 * each other's behavior.
 * @returns the sorted list of rules to extend from
 */
export const orderRulesets = (): Extends => [
    ...TO_PREPEND,
    ...RULESETS.map((filename) => RULESETS_DIR + filename),
    ...TO_APPEND,
];
