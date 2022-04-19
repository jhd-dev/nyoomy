import 'reflect-metadata';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './utils/i18n';
import './style/index.scss';
import './style/App.scss';
import React, { StrictMode } from 'react';
import fetch from 'cross-fetch';
import { render } from 'react-dom';
import { App } from './App';

global.fetch = fetch;

const rootElement = document.getElementById('root');
if (rootElement == null) throw new Error('Could not find #root element.');

render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
