import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import MetricType from '../types/enums/MetricType';
import { Metric } from './metric.entity';

@Entity('counter_metrics')
@ObjectType()
export class CounterMetric {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column(() => Metric)
    @Field(() => Metric)
    public metric: Metric;

    @Field(() => MetricType)
    public readonly metricType: MetricType = MetricType.COUNTER;

    @Column('integer', { default: 8 })
    @Field(() => Int)
    public maximum: number;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public minimum: number;

    @Column('integer', { default: 1 })
    @Field(() => Int)
    public interval: number;
}
