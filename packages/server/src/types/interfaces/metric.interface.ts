import type MetricType from '../enums/metric-type.enum';

export interface IMetric {
    id: string;
    metric: IMetricEntity;
}

export interface IMetricEntity {
    id: string;
    metricType: MetricType;
    entries: IMetricEntryEntity;
}

export interface IMetricEntryEntity {
    id: string;
    metric: IMetricEntity;
    date: string;
}

export interface IMetricEntry {
    id: string;
    metricEntry: IMetricEntryEntity;
}
