import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
} from 'typeorm';
import { CounterMetric } from './CounterMetric';

@Entity('counter_entries')
@ObjectType({
    description: "A single day's data for a particular CounterMetric",
})
export class CounterEntry extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => CounterMetric, (metric) => metric.metricEntries)
    @Field(() => CounterMetric)
    public metric: CounterMetric;

    @Column('date')
    @Field(() => String)
    public date: string;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public count: number;
}
