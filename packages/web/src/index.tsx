import 'reflect-metadata';
import './utils/i18n';
import './style/index.scss';
import './style/App.scss';
import React, { StrictMode } from 'react';
import fetch from 'cross-fetch';
import { render } from 'react-dom';
import Router from './Router';
import { ApolloWrapper } from './components/ApolloWrapper';
// import { __dev__ } from './env';
// import registerServiceWorker from './utils/registerServiceWorker';
// import { reportWebVitals } from './utils/reportWebVitals';

global.fetch = fetch;

const rootElement = document.getElementById('root');
if (rootElement == null) throw new Error('Could not find #root element.');

render(
    <StrictMode>
        <ApolloWrapper>
            <div data-testid="App" className="App">
                <Router />
            </div>
        </ApolloWrapper>
    </StrictMode>,
    rootElement
);

// registerServiceWorker();

// if (__dev__) reportWebVitals(console.info);
