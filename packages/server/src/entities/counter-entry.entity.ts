// import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CounterMetric } from './counter-metric.entity';

@Entity('counter_entries')
@ObjectType({
    description: "A single day's data for a particular CounterMetric",
})
export class CounterEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => CounterMetric)
    @Field(() => CounterMetric)
    public metric: CounterMetric;

    @Column('date')
    @Field()
    public date: Date;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public count: number;

    @CreateDateColumn({ type: 'timestamptz' })
    @Field()
    public readonly createdAt: Date;
}
