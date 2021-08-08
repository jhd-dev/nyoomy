import type { FC } from 'react';
import React from 'react';
import { AddCounterButton } from '../components/AddCounterButton';
import { Header } from '../components/Header';
import { MetricTiles } from '../components/MetricTiles';
import type { RouteComponentProps } from 'react-router-dom';

const MainPage: FC<RouteComponentProps> = () => (
    <div>
        <Header />
        <AddCounterButton />
        <MetricTiles />
    </div>
);

export default MainPage;
