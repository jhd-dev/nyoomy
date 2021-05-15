import React from 'react';
import type { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import RegistrationPage from './routes/RegistrationPage';

const Routes: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
