import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import {
    Column,
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { IMetric } from '../types/IMetric';
import MetricType from '../types/MetricType';
import { CounterEntry } from './CounterEntry';
import { User } from './User';

@Entity('counter_metrics')
@ObjectType({ implements: IMetric })
export class CounterMetric extends BaseEntity implements IMetric {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @Field(() => MetricType)
    public readonly metricType: MetricType = MetricType.COUNTER;

    @ManyToOne(() => User, (user) => user.metrics)
    @Field(() => User)
    public user: User;

    @OneToMany(() => CounterEntry, (entry) => entry.metric, {
        cascade: true,
        nullable: false,
        onDelete: 'CASCADE',
    })
    @Field(() => [CounterEntry])
    public metricEntries: CounterEntry[];

    @Column('varchar', { length: 32, default: '' })
    @Field(() => String)
    public label: string;

    @Column('varchar', { length: 256, default: '' })
    @Field(() => String)
    public description: string;

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
