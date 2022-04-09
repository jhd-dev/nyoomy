import React from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './routes/ChatPage';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import PageNotFoundAlert from './routes/PageNotFoundAlert';
import RegistrationPage from './routes/RegistrationPage';
import SettingsPage from './routes/SettingsPage';
import TodoDetailsRoute from './routes/TodoDetailsRoute';
import TodoPage from './routes/TodoPage';

const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="register" element={<RegistrationPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="messages" element={<ChatPage />} />
                <Route path="todo" element={<TodoPage />}>
                    <Route path=":todoId" element={<TodoDetailsRoute />} />
                </Route>
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
