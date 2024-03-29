import {
    ClassConstructor,
    plainToClass,
    classToPlain,
} from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import type { Dictionary } from '../types/types';

// const primitiveConstructors = [String, Number, BigInt, Boolean, Symbol];
// type TPrimitiveConstructor =
//     | typeof primitiveConstructors[number]
//     | null
//     | undefined;
// type TPrimitive = string | number | bigint | boolean | symbol | null | undefined;
// type TPrimitiveConstructorPair = [string, typeof String] | [number, typeof Number] | [];

export type TypeResolution<T> = [T | null, ValidationError[]];

/**
 *
 * Determines whether the given value is a valid object, ensuring it is not
 * a primitive, null, undefined, or an array.
 *
 * @param {unknown} obj the potential object to test
 * @returns {boolean} whether the given value is a valid object
 */
export function isValidObject(obj: unknown): boolean {
    return typeof obj === 'object' && obj != null && !Array.isArray(obj);
}

/**
 * Ensures that the given value can be resolved to the given class,
 * returning it if so, or null if otherwise.
 *
 * @param {ClassConstructor} targetClass the class to attempt to resolve the sourceObject to
 * @param {unknown} sourceObject the value to attempt to resolve to the targetClass
 * @returns {Promise<TypeResolution>} the type-safe, resolved object
 * @throws when strict is true and the resolution failed due to incompatible types.
 */
export async function resolveToClass<T extends Dictionary>(
    targetClass: ClassConstructor<T>,
    sourceObject: unknown
): Promise<TypeResolution<T>> {
    if (!isValidObject(sourceObject)) {
        throw new Error('source value is not a valid object.');
    }

    const instance: T = plainToClass(targetClass, sourceObject);

    try {
        await validateOrReject(instance);
        return [instance, []];
    } catch (errors: unknown) {
        const validationErrors: ValidationError[] = errors as ValidationError[];
        return [null, validationErrors];
    }
}

export function resolveToDict(instance: unknown): TypeResolution<Dictionary> {
    if (!isValidObject(instance)) {
        throw new Error('source value is not a valid object.');
    }
    const dict: Dictionary = classToPlain(instance);
    return [dict, []];
}
