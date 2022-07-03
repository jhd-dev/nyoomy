import type { FC, ReactNode } from 'react';
import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    // gql,
} from '@apollo/client';
import type { StrictTypedTypePolicies } from '@nyoomy/graphql';

const uri = `${window.location.origin}/graphql`;

console.info(`Creating Apollo Client for: ${uri}`);

const typePolicies: StrictTypedTypePolicies = {};

const cache = new InMemoryCache({ typePolicies });

const client = new ApolloClient({
    uri,
    cache,
    name: 'web',
});

interface IApolloWrapperProps {
    children?: ReactNode;
}

export const ApolloWrapper: FC<IApolloWrapperProps> = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);
