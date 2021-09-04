import { Min } from 'class-validator';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import MetricType from '../types/enums/MetricType';
import { Metric } from './Metric';

@Entity('selection_metrics')
@ObjectType({ description: 'A Numeric Rating Selection' })
export class SelectionMetric {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column(() => Metric)
    @Field(() => Metric)
    public metric: Metric;

    @Field(() => MetricType)
    public readonly metricType: MetricType = MetricType.SELECTION;

    @Column('smallint', { default: 1, unsigned: true })
    @Field(() => Int)
    @Min(1)
    public minSelections: number;

    @Column('smallint', { default: 0, unsigned: true }) // 0 = No limit
    @Field(() => Int)
    @Min(0)
    public maxSelections: number;
}
