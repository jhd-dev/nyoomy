import React, { useEffect, useState } from 'react';
import fetch from 'cross-fetch';
import './App.scss';
import { Routes } from './components/Routes';
import { getAccessToken, setAccessToken } from "./accessToken";
import { ApolloClient, ApolloProvider, ApolloLink, Observable, HttpLink,
    InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode, { JwtPayload } from "jwt-decode";

const cache = new InMemoryCache({});

const requestLink = new ApolloLink((operation, forward): Observable<any> => (
    new Observable(observer => {
        let handle: any;
        Promise
            .resolve(operation)
            .then(oper => {
                const accessToken = getAccessToken();
                if (accessToken) {
                    oper.setContext({
                        headers: {
                        authorization: `bearer ${accessToken}`
                        }
                    });
                }
            })
            .then(() => {
                handle = forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer)
                });
            })
            .catch(observer.error.bind(observer));

        return (): void => {
            if (handle) handle.unsubscribe();
        };
    })
));

const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: "accessToken",
      isTokenValidOrUndefined: (): boolean => {
            const token = getAccessToken();
            if (!token) return true;

            try {
                const { exp } = jwtDecode<JwtPayload>(token);
                return (!!exp && Date.now() < exp * 1000);
            } catch {
                return false;
            }
      },
      fetchAccessToken: () => {
        return fetch(window.location.origin + "/refresh_token", {
          method: "POST",
          credentials: "include"
        });
      },
      handleFetch: (accessToken: string): void => {
        setAccessToken(accessToken);
      },
      handleError: (err: any): void => {
        console.warn("Your refresh token is invalid. Try to relogin");
        console.error(err);
      },
    }),
    onError(({ graphQLErrors, networkError }) => {
      console.warn(graphQLErrors);
      console.warn(networkError);
    }),
    requestLink,
    new HttpLink({
        uri: window.location.origin + "/graphql",
        credentials: "include",
        fetch,
    }),
  ]),
  cache,
});

interface IProps {}

export const App: React.FC<IProps> = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(window.location.origin + "/refresh_token", {
            method: "POST",
            credentials: "include",
        }).then(async x => {
            const { accessToken } = await x.json();
            console.log(accessToken);
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
