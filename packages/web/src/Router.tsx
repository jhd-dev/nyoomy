import React from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import PageNotFoundAlert from './routes/PageNotFoundAlert';
import RegistrationPage from './routes/RegistrationPage';
import SettingsPage from './routes/SettingsPage';

const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="register" element={<RegistrationPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route
                    path="settings"
                    element={<SettingsPage drawerWidth={236} />}
                />
                <Route path="*" element={<PageNotFoundAlert />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
