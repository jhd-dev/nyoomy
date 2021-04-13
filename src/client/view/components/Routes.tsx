import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from './MainPage';
import { RegistrationPage } from './RegistrationPage';
import { LoginPage } from './LoginPage';
import { Header } from './Header';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route
                        exact
                        path="/register"
                        component={RegistrationPage}
                    />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
