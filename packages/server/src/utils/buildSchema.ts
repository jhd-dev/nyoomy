import { buildSchema as buildGraphqlSchema } from '@nestjs/graphql';
import { resolve } from 'path';
import type { IContext } from '../types/interfaces/context.interface';
import type { GraphQLSchema } from 'graphql';

export const buildSchema = (): Promise<GraphQLSchema> =>
    buildGraphqlSchema({
        resolvers: [resolve(__dirname, '../resolvers/*.ts')],
        authChecker: ({ context }: { context: Partial<IContext> }) =>
            context.req?.session.userId != null,
        emitSchemaFile: {
            path: resolve(__dirname, '../../dist/schema.graphql'),
            commentDescriptions: true,
            sortedSchema: true,
        },
    });
