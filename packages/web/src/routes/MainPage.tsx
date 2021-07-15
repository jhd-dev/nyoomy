import type { FC } from 'react';
import React from 'react';
import { Header } from '../components/Header';
import { CounterTile } from '../components/tiles/CounterTile';
import type { RouteComponentProps } from 'react-router-dom';

const MainPage: FC<RouteComponentProps> = () => (
    <>
        <Header />
        <div className="tiles">
            <CounterTile />
        </div>
    </>
);

export default MainPage;
