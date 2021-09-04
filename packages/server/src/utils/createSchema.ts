import { resolve } from 'path';
import { buildSchema } from 'type-graphql';
import { Container } from '../internal';
import { UserResolver } from '../resolvers/UserResolver';
import type { IContext } from '../types/interfaces/IContext';
import type { GraphQLSchema } from 'graphql';

export const createSchema = (): Promise<GraphQLSchema> =>
    buildSchema({
        resolvers: [UserResolver], // [resolve(__dirname, '../resolvers/*.ts')],
        authChecker: ({ context }: { context: Partial<IContext> }) =>
            context.req?.session.userId != null,
        emitSchemaFile: {
            path: resolve(__dirname, '../../dist/schema.graphql'),
            commentDescriptions: true,
            sortedSchema: true,
        },
        container: Container,
    });
