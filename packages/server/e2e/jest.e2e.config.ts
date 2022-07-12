import baseConfig from '../jest.config';

export default {
    ...baseConfig,
    rootDir: '..',
    testMatch: ['<rootDir>/test/**/*.e2e-spec.ts'],
};
