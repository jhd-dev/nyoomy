import { Plugin } from '@nestjs/apollo';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import {
    fieldExtensionsEstimator,
    getComplexity,
    simpleEstimator,
} from 'graphql-query-complexity';
import type {
    ApolloServerPlugin,
    GraphQLRequestListener,
} from 'apollo-server-plugin-base';

const MAX_COMPLEXITY = 100000;

@Plugin()
export class ComplexityPlugin implements ApolloServerPlugin {
    public constructor(private readonly gqlSchemaHost: GraphQLSchemaHost) {}

    public async requestDidStart(): Promise<GraphQLRequestListener> {
        const { schema } = this.gqlSchemaHost;

        return {
            async didResolveOperation({ request, document }): Promise<void> {
                const complexity = getComplexity({
                    schema,
                    operationName: request.operationName,
                    query: document,
                    variables: request.variables,
                    estimators: [
                        fieldExtensionsEstimator(),
                        simpleEstimator({ defaultComplexity: 1 }),
                    ],
                });
                if (complexity >= MAX_COMPLEXITY) {
                    const message = `Query is too complex: ${complexity}. Maximum allowed complexity: ${MAX_COMPLEXITY}`;
                    throw new GraphQLError(message);
                }
            },
        };
    }
}
