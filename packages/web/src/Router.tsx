import React from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import RegistrationPage from './routes/RegistrationPage';

const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
