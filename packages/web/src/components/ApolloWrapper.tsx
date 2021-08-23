import type { FC } from 'react';
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
    },
});

const client = new ApolloClient({
    uri: apolloUri,
    cache,
    name: 'web',
});

export const ApolloWrapper: FC = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
