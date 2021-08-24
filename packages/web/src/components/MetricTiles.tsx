import type { FC } from 'react';
import React, { useEffect } from 'react';
import type {
    CounterMetricDailyEntry,
    TimerMetricPayload,
} from '@nyoomy/graphql';
import { useMetricsQuery } from '@nyoomy/graphql';
import { TodoListPanel } from './TodoListPanel';
import { CounterTile } from './tiles/CounterTile';
import { TimerTile } from './tiles/TimerTile';

export const MetricTiles: FC = () => {
    const { data, loading, error } = useMetricsQuery();

    useEffect(() => {
        console.log(data);
        if (error) {
            console.error(error);
        }
    }, [data, loading, error]);

    if (data === undefined) {
        return <></>;
    }
    return (
        <div className="tiles">
            {loading ?? <div>Loading...</div>}
            {data.getCounters?.map((metric: CounterMetricDailyEntry) => (
                <CounterTile key={metric.metricId} metric={metric} />
            ))}
            {data.getTimers?.map((metric: TimerMetricPayload) => (
                <TimerTile key={metric.metricId} metric={metric} />
            ))}
            <TodoListPanel />
        </div>
    );
};
