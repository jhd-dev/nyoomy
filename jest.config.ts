import 'reflect-metadata';
import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

// https://jestjs.io/docs/configuration
const getJestConfig = (): Config.InitialOptions => ({
    clearMocks: true,
    collectCoverage: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    preset: 'ts-jest',
    projects: ['<rootDir>/packages/**/jest.config.ts'],
    testEnvironment: 'node',
    testMatch: ['*.test.ts', '*.test.tsx'],
    transform: {
        '\\.([jt]sx?|json)$': 'babel-jest',
        '.+\\.(svg|css|sass|scss|png|jpg|gif)$': 'jest-transform-stub',
    },
    verbose: false,
});

export default getJestConfig;
