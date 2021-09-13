/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { default as dayjs, isDayjs } from 'dayjs';
import DurationPlugin from 'dayjs/plugin/duration';
import { GraphQLScalarType, Kind } from 'graphql';
import type { Dayjs } from 'dayjs';
import type { ValueNode } from 'graphql';

dayjs.extend(DurationPlugin);

export type Duration = DurationPlugin.Duration;

export const DurationScalar: GraphQLScalarType = new GraphQLScalarType({
    name: 'Duration',
    description: 'A day.js duration representing a contextless length of time',
    serialize(value: unknown): string {
        if (!dayjs.isDuration(value)) {
            throw new Error('DurationScalar can only serialize dayjs values');
        }
        return value.format();
    },
    parseValue(value: unknown): Duration {
        if (typeof value === 'string') {
            return dayjs.duration(value);
        }
        throw new Error(`Failed to parse Duration from value.`);
    },
    parseLiteral(ast: ValueNode): Duration {
        if (ast.kind === Kind.STRING) {
            return dayjs.duration(ast.value);
        }
        throw new Error(
            `Failed to parse Duration from literal of kind '${ast.kind}'.`
        );
    },
});
