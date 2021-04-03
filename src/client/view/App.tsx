import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';
import './App.scss';
import { Routes } from './components/Routes';

interface IProps {}

export const App: React.FC<IProps> = () => {

    const [loading, setLoading] = useState(true);

    const client = new ApolloClient({
        link: new HttpLink({
            uri: window.location.origin + "/graphql",
            credentials: "same-origin",
            fetch,
        }),
        cache: new InMemoryCache(),
    });

    useEffect(() => {
        fetch(window.location.origin + "/refresh_token", {
            method: "POST",
            credentials: "include",
        }).then(async x => {
            const data = await x.json();
            console.log(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ApolloProvider client={client}>
            <div data-testid="App" className="App">
                <Routes />
            </div>
        </ApolloProvider>
    );
};
