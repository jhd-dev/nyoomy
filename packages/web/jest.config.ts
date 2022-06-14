import 'reflect-metadata';
import type { Config } from '@jest/types';

// https://jestjs.io/docs/configuration
const getJestConfig = (): Config.InitialOptions => ({
    coverageDirectory: './coverage',
    verbose: false,
    testEnvironment: 'jsdom',
});

export default getJestConfig;
