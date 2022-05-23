import type { FC, ReactNode } from 'react';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloUri = `${window.location.origin}/graphql`;

console.info(`Creating Apollo Client for: ${apolloUri}`);

const cache = new InMemoryCache({
    typePolicies: {
        CounterMetricDailyEntry: {
            keyFields: ['metricId', 'date'],
        },
        TimerMetricPayload: {
            keyFields: ['metricId', 'date'],
        },
        TodoResponse: {
            keyFields: ['todoId', 'date'],
        },
    },
});

const client = new ApolloClient({
    uri: apolloUri,
    cache,
    name: 'web',
});

interface IApolloWrapperProps {
    children?: ReactNode;
}

export const ApolloWrapper: FC<IApolloWrapperProps> = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
