import 'reflect-metadata';
import './utils/i18n';
import './style/index.scss';
import './style/App.scss';
import React, { StrictMode } from 'react';
import { __dev__ } from '@nyoomy/global';
import fetch from 'cross-fetch';
import ReactDOM from 'react-dom';
import Router from './Router';
import { ApolloWrapper } from './components/ApolloWrapper';
import registerServiceWorker from './utils/registerServiceWorker';
import { reportWebVitals } from './utils/reportWebVitals';

global.fetch = fetch;

const rootElement = document.getElementById('root');
if (rootElement == null) throw new Error('Could not find #root element.');

ReactDOM.render(
    <StrictMode>
        <ApolloWrapper>
            <div data-testid="App" className="App">
                <Router />
            </div>
        </ApolloWrapper>
    </StrictMode>,
    rootElement
);

registerServiceWorker();

if (__dev__) reportWebVitals(console.info);
