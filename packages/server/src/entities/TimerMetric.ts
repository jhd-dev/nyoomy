import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import MetricType from '../types/enums/MetricType';
import { Metric } from '../types/interfaces/Metric';
import { TimerEntry } from './TimerEntry';

@Entity('timer_metrics')
@ObjectType()
export class TimerMetric {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column(() => Metric)
    @Field(() => Metric)
    public metric: Metric;

    @Field(() => MetricType)
    public readonly metricType: MetricType = MetricType.TIMER;

    /* The number of minutes an attempt should last to succeed */
    @Column('integer', { default: 25 })
    @Field(() => Int)
    public goalLength: number;

    /* The number of successful attempts required to fulfill the metric */
    @Column('integer', { default: 1 })
    @Field(() => Int)
    public goalPerDay: number;
}
