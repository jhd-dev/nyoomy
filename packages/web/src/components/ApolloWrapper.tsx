import type { FC } from 'react';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apolloUri = `${window.location.origin}/graphql`;

console.info(`Creating Apollo Client for: ${apolloUri}`);

const client = new ApolloClient({
    uri: apolloUri,
    cache: new InMemoryCache(),
    name: 'web',
});

export const ApolloWrapper: FC = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
