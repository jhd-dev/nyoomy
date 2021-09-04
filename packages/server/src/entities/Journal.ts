import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import MetricType from '../types/enums/MetricType';
import { Metric } from './Metric';

@Entity('journals')
@ObjectType()
export class Journal {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column(() => Metric)
    @Field(() => Metric)
    public metric: Metric;

    @Field(() => MetricType)
    public metricType: MetricType = MetricType.JOURNAL;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public dailyWordGoal: number;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
