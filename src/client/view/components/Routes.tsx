import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { MainPage } from './MainPage';
import { RegistrationPage } from './RegistrationPage';
import { LoginPage } from './LoginPage';
import { APP_NAME } from '../../../shared/Constants';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">{APP_NAME}</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </header>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/register" component={RegistrationPage} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};
