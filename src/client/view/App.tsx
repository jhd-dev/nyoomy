import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import logo from './logo.svg';
import './App.scss';
import CreateUser from './components/CreateUser';

const App: React.FC<any> = () => {

    const client = new ApolloClient({
        uri: window.location.origin + "/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <CreateUser />
            </div>
        </ApolloProvider>
    );
}

export default App;
