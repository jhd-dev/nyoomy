import type { FC } from 'react';
import React from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import { Header } from '../components/Header';

const SettingsPage: FC<RouteComponentProps> = () => (
    <>
        <Header />
    </>
);

export default SettingsPage;
