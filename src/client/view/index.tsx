import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'cross-fetch';
import 'reflect-metadata';
import './style/index.scss';
import { App } from './App';

global.fetch = fetch;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
