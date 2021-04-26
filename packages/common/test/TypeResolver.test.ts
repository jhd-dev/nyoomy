/* eslint-disable max-classes-per-file */
import { resolveToClass, isValidObject } from '../src/utils/resolve-types';
import { IsString, IsNumber, IsPositive } from 'class-validator';

class Empty {}

class Person {
    @IsString()
    public name: string;

    @IsNumber()
    @IsPositive()
    public age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

describe('TypeResolver', () => {
    describe('resolveToClass', () => {
        it('throws an error if the sourceObject is not an object', () => {
            expect(() => resolveToClass(Empty, undefined)).toThrow();
            expect(() => resolveToClass(Empty, null)).toThrow();
            expect(() => resolveToClass(Empty, 'str')).toThrow();
            expect(() => resolveToClass(Empty, 1234.5)).toThrow();
            expect(() => resolveToClass(Empty, Symbol())).toThrow();
            expect(() => resolveToClass(Empty, BigInt(1234))).toThrow();
            expect(() => resolveToClass(Empty, [])).toThrow();
        });

        it('returns a tuple leading with the validated object if it fits the class definition', () => {});

        it('returns a tuple ending with the resulting errors if it does not match the given class', () => {});
    });

    describe('isValidObject', () => {
        it('returns true when the given value is a valid object', () => {
            expect(isValidObject({})).toBe(true);
            expect(isValidObject(new Date())).toBe(true);
        });
        it('returns false when the given value is not a valid object', () => {
            expect(isValidObject(undefined)).toBe(false);
            expect(isValidObject(null)).toBe(false);
            expect(isValidObject('str')).toBe(false);
            expect(isValidObject(1234.5)).toBe(false);
            expect(isValidObject(Symbol())).toBe(false);
            expect(isValidObject(BigInt(1234))).toBe(false);
            expect(isValidObject([])).toBe(false);
        });
    });
});
