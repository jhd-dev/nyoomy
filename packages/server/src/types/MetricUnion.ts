import { createUnionType } from 'type-graphql';
import { CounterMetric, TimerMetric } from '../entities';
import MetricType from './MetricType';

export const MetricUnion = createUnionType({
    name: 'Metric',
    types: () => [CounterMetric, TimerMetric] as const,
    resolveType: (value) => {
        switch (value.metricType) {
            case MetricType.COUNTER:
                return CounterMetric;
            case MetricType.TIMER:
                return TimerMetric;
            default:
                return undefined;
        }
    },
});
