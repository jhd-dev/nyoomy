import React, { useEffect, useState } from 'react';
import fetch from 'cross-fetch';
import './style/App.scss';
import Routes from './routes/Routes';
import { getAccessToken, setAccessToken } from './utils/accessToken';
import {
    ApolloClient,
    ApolloProvider,
    ApolloLink,
    Observable,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { ACCESS_TOKEN_NAME } from '../../shared/constants';

const cache = new InMemoryCache({});

const requestLink: ApolloLink = new ApolloLink(
    (operation, forward) =>
        new Observable((observer) => {
            let handle: ZenObservable.Subscription | null = null;
            const unsubscribeIfHandleExists = (): void => {
                if (handle !== null) handle.unsubscribe();
            };

            try {
                const accessToken = getAccessToken();
                if (accessToken) {
                    operation.setContext({
                        headers: {
                            authorization: `bearer ${accessToken}`,
                        },
                    });
                }
                handle = forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                });
            } catch (err: any) {
                console.error(err);
                observer.error.bind(observer);
            }

            return unsubscribeIfHandleExists;
        })
);

const client = new ApolloClient({
    link: ApolloLink.from([
        new TokenRefreshLink({
            accessTokenField: ACCESS_TOKEN_NAME,
            isTokenValidOrUndefined: (): boolean => {
                const token = getAccessToken();
                if (token === '') return true;

                try {
                    const { exp } = jwtDecode<JwtPayload>(token);
                    return !!exp && Date.now() < exp * 1000;
                } catch {
                    return false;
                }
            },
            fetchAccessToken: (): Promise<Response> => {
                return fetch(window.location.origin + '/refresh_token', {
                    method: 'POST',
                    credentials: 'include',
                });
            },
            handleFetch: (accessToken: string): void => {
                setAccessToken(accessToken);
            },
            handleError: (err: any): void => {
                console.warn('Your refresh token is invalid. Try to relogin');
                console.error(err);
            },
        }),
        onError(({ graphQLErrors, networkError }) => {
            console.warn(graphQLErrors);
            console.warn(networkError);
        }),
        requestLink,
        new HttpLink({
            uri: window.location.origin + '/graphql',
            credentials: 'include',
            fetch,
        }),
    ]),
    cache,
});

interface AppIProps {}

export const App: React.FC<AppIProps> = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(window.location.origin + '/refresh_token', {
            method: 'POST',
            credentials: 'include',
        }).then(async (x) => {
            const { accessToken } = await x.json();
            console.log(accessToken);
            setAccessToken(accessToken);
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
