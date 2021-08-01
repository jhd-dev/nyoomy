import type { FC } from 'react';
import React from 'react';
import type { CounterMetricDailyEntry } from '@nyoomy/graphql';
import { useCountersQuery } from '@nyoomy/graphql';
import { Header } from '../components/Header';
import { CounterTile } from '../components/tiles/CounterTile';
import type { RouteComponentProps } from 'react-router-dom';

const MainPage: FC<RouteComponentProps> = () => {
    const { data, loading, error } = useCountersQuery();
    console.log(data);
    if (error) {
        console.error(error);
    }
    if (data === undefined) {
        return <></>;
    }
    return (
        <>
            <Header />
            <div className="tiles">
                {loading ?? <div>Loading...</div>}
                {data?.getCounters?.map((metric: CounterMetricDailyEntry) => (
                    <CounterTile key={metric.metricId} metric={metric} />
                ))}
            </div>
        </>
    );
};

export default MainPage;
