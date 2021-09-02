import 'reflect-metadata';
import { Field, ObjectType, Float, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import MetricType from '../types/enums/MetricType';
import { Metric } from '../types/interfaces/Metric';

@Entity('float_metrics')
@ObjectType()
export class DailyFloatMetric {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column(() => Metric)
    @Field(() => Metric)
    public metric: Metric;

    @Field(() => MetricType)
    public readonly metricType: MetricType = MetricType.FLOAT;

    @Column('float', { default: 8.0 })
    @Field(() => Float)
    public max: number;

    @Column('float', { default: 0.0 })
    @Field(() => Float)
    public min: number;
}
