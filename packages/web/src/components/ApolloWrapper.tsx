import type { FC } from 'react';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: window.location.origin,
    cache: new InMemoryCache({}),
});

export const ApolloWrapper: FC = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
