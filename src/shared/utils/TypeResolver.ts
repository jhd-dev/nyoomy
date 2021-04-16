import {
    ClassConstructor,
    plainToClass,
    classToPlain,
} from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import type { Dictionary } from '../types';

// const primitiveConstructors = [String, Number, BigInt, Boolean, Symbol];
// type TPrimitiveConstructor =
//     | typeof primitiveConstructors[number]
//     | null
//     | undefined;
// type TPrimitive = string | number | bigint | boolean | symbol | null | undefined;
// type TPrimitiveConstructorPair = [string, typeof String] | [number, typeof Number] | [];

export type TypeResolution<T> = [T | null, ValidationError[]];

/**
 * Class to handle the conversion of unknown values into type-safe equivalents.
 * Intended to bolster type-safety, not perform arbitrary type conversions.
 *
 * @exports
 * @class
 */
export default class TypeResolver {
    /**
     * Ensures that the given value can be resolved to the given class,
     * returning it if so, or null if otherwise.
     *
     * @param targetClass the class to attempt to resolve the sourceObject to
     * @param sourceObject the value to attempt to resolve to the targetClass
     * @returns the type-safe, resolved object
     * @throws when strict is true and the resolution failed due to incompatible types.
     */
    public static async resolveToClass<T extends Dictionary>(
        targetClass: ClassConstructor<T>,
        sourceObject: unknown
    ): Promise<TypeResolution<T>> {
        if (!TypeResolver.isValidObject(sourceObject)) {
            throw new Error('source value is not a valid object.');
        }

        const instance: T = plainToClass(targetClass, sourceObject);

        try {
            await validateOrReject(instance);
            return [instance, []];
        } catch (errors: unknown) {
            const validationErrors = errors as ValidationError[];
            return [null, validationErrors];
        }
    }

    public static resolveToDict(instance: unknown): TypeResolution<Dictionary> {
        if (!TypeResolver.isValidObject(instance)) {
            throw new Error('source value is not a valid object.');
        }
        const dict: Dictionary = classToPlain(instance);
        return [dict, []];
    }

    /**
     *
     * Determines whether the given value is a valid object, ensuring it is not
     * a primitive, null, undefined, or an array.
     *
     * @param obj the potential object to test
     * @returns whether the given value is a valid object
     */
    public static isValidObject(obj: unknown): boolean {
        return typeof obj === 'object' && obj != null && !Array.isArray(obj);
    }
}
