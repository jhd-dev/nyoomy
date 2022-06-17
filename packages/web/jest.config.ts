import 'reflect-metadata';
import type { Config } from '@jest/types';

// https://jestjs.io/docs/configuration
const getJestConfig = (): Config.InitialOptions => ({
    coverageDirectory: './coverage',
    verbose: false,
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.ts',
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
    },
});

export default getJestConfig;
