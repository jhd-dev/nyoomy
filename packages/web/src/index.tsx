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
import { createRoot } from 'react-dom/client';
import { App } from './App';

global.fetch = fetch;

const renderApp = () => {
    const rootElement = document.getElementById('root');
    if (rootElement == null) throw new Error('Could not find #root element.');

    createRoot(rootElement, {
        identifierPrefix: 'nyoomy-',
        onRecoverableError(error: unknown) {
            console.error(error);
        },
    }).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
};

document.addEventListener('DOMContentLoaded', renderApp, { once: true });
