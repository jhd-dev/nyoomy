import { NodeEnv } from './types';
import { getNodeEnv, getEnvString } from './env';

import type { NodeEnvString } from './types';

describe('env', () => {
    const propName: string = 'NODE_ENV';
    const propValString: NodeEnvString = 'test';
    const propValEnum: NodeEnv = NodeEnv.TEST;
    const absentProp: string = Symbol().toString();

    describe('getNodeEnv', () => {
        it('returns the enum value for the current NODE_ENV', () => {
            expect(getNodeEnv()).toBe(propValEnum);
        });
    });

    describe('getEnvString', () => {
        it('returns the specified environmental variable if found', (): void => {
            expect(getEnvString(propName, true)).toBe(propValString);
            expect(getEnvString(propName, false)).toBe(propValString);
        });

        it('returns undefined if required=false and the specified property is not found', (): void => {
            expect(getEnvString(absentProp, false)).toBe(undefined);
        });

        it('throws an error if required=false and the specified property is not found', () => {
            expect(() => getEnvString(absentProp, true)).toThrow();
        });
    });
});
