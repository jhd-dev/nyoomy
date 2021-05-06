import type { GraphQLSchema } from 'graphql';
import { resolve } from 'path';
import { buildSchema } from 'type-graphql';
import type { IContext } from '../types/IContext';

export const createSchema = (): Promise<GraphQLSchema> =>
    buildSchema({
        resolvers: [resolve(__dirname, '../resolvers/*.ts')],
        authChecker: ({ context }: { context: Partial<IContext> }) =>
            context.req?.session.userId != null,
        emitSchemaFile: {
            path: resolve(__dirname, '../../dist/schema.graphql'),
            commentDescriptions: true,
            sortedSchema: true,
        },
    });
