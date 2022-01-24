import type { FC } from 'react';
import React from 'react';
import { AddCounterButton } from '../components/AddCounterButton';
import { AddTimerButton } from '../components/AddTimerButton';
import { Header } from '../components/Header';
import { MetricTiles } from '../components/MetricTiles';
// import type { RouteComponentProps } from 'react-router-dom';

const MainPage: FC = () => (
    <div>
        <Header />
        <AddCounterButton />
        <AddTimerButton />
        <MetricTiles />
    </div>
);

export default MainPage;
