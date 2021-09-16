import 'reflect-metadata';
import { defaults } from 'jest-config';
import type { Config } from '@jest/types';

// https://jestjs.io/docs/configuration
const getJestConfig = (): Config.InitialOptions => ({
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    coverageDirectory: './coverage',
    verbose: false,
});

export default getJestConfig;
