import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';
import './App.scss';
import { Routes } from './components/Routes';

export const App: React.FC<any> = () => {

    const client = new ApolloClient({
        link: new HttpLink({
            uri: window.location.origin + "/graphql",
            credentials: "same-origin",
            fetch,
        }),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <div data-testid="App" className="App">
                <Routes />
            </div>
        </ApolloProvider>
    );
};
