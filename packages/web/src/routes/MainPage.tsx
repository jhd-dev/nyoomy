import type { FC } from 'react';
import React from 'react';
import type { RouteComponentProps } from 'react-router-dom';
import { Header } from '../components/Header';

const MainPage: FC<RouteComponentProps> = () => (
    <>
        <Header />
    </>
);

export default MainPage;
