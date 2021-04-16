import type { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

const getSchema = (): Promise<GraphQLSchema> => {
    return buildSchema({
        resolvers: [UserResolver],
    });
};

export default getSchema;
