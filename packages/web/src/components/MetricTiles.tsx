import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { CounterMetricDailyEntry } from '@nyoomy/graphql';
import { useCountersQuery } from '@nyoomy/graphql';
import { CounterTile } from './tiles/CounterTile';

export const MetricTiles: FC = () => {
    const { data, loading, error } = useCountersQuery();

    useEffect(() => {
        console.log(data);
        if (error) {
            console.error(error);
        }
    });

    if (data === undefined) {
        return <></>;
    }
    return (
        <div className="tiles">
            {loading ?? <div>Loading...</div>}
            {data?.getCounters?.map((metric: CounterMetricDailyEntry) => (
                <CounterTile key={metric.metricId} metric={metric} />
            ))}
        </div>
    );
};
