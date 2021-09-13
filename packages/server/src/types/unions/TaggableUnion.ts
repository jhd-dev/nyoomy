import { createUnionType } from '@nestjs/graphql';
import {
    CounterMetric,
    TimerMetric,
    Journal,
    Scale,
    SelectionMetric,
} from '../../entities';
import MetricType from '../enums/MetricType';

export const MetricUnion = createUnionType({
    name: 'Metric',
    types: () =>
        [CounterMetric, TimerMetric, Journal, Scale, SelectionMetric] as const,
    resolveType: (value) => {
        switch (value.metricType) {
            case MetricType.COUNTER:
                return CounterMetric;
            case MetricType.TIMER:
                return TimerMetric;
            case MetricType.JOURNAL:
                return Journal;
            case MetricType.SCALE:
                return Scale;
            case MetricType.SELECTION:
                return SelectionMetric;
            default:
                return undefined;
        }
    },
});
