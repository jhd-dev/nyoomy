/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { default as dayjs, isDayjs } from 'dayjs';
import { GraphQLScalarType, Kind } from 'graphql';
import type { Dayjs } from 'dayjs';
import type { ValueNode } from 'graphql';

export type DateTime = Dayjs;

export const DateTimeScalar: GraphQLScalarType = new GraphQLScalarType({
    name: 'DateTime',
    description: 'A day.js object representing a point in time',
    serialize(value: unknown): string {
        if (!isDayjs(value)) {
            throw new Error('DateTimeScalar can only serialize dayjs values');
        }
        return value.format();
    },
    parseValue(value: unknown): DateTime {
        if (typeof value === 'string' || typeof value === 'number') {
            return dayjs(value);
        }
        throw new Error(`Failed to parse DateTime from value.`);
    },
    parseLiteral(ast: ValueNode): DateTime {
        switch (ast.kind) {
            case Kind.STRING:
            case Kind.INT:
                return dayjs(ast.value);
            default:
                throw new Error(
                    `Failed to parse DateTime from literal of kind '${ast.kind}'.`
                );
        }
    },
});
