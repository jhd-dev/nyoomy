import React from 'react';
import type { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from './routes/ChatPage';
import { FeedbackPage } from './routes/FeedbackPage';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import { MedicinePage } from './routes/MedicinePage';
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
                <Route path="medication" element={<MedicinePage />}>
                    <Route path="new" />
                    <Route path=":medicationId">
                        <Route path="edit" />
                        <Route path="dose" />
                        <Route index element={<Navigate to="edit" replace />} />
                    </Route>
                </Route>
                <Route
                    path="settings"
                    element={<SettingsPage drawerWidth={236} />}
                >
                    <Route path="general" />
                    <Route path="appearance" />
                    <Route path="privacy" />
                    <Route index element={<Navigate to="general" replace />} />
                </Route>
                <Route path="feedback" element={<FeedbackPage />} />
                <Route path="*" element={<PageNotFoundAlert />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
