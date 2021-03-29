import type {Config} from '@jest/types';
import { defaults } from 'jest-config';
import "reflect-metadata";

const getJestConfig = async (): Promise<Config.InitialOptions> => ({
    verbose: false,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        ".+\\.(svg|css|sass|scss|png|jpg|gif)$": "jest-transform-stub",
    },
});

export default getJestConfig;
