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
import MetricType from '../types/MetricType';
import { IMetric } from '../types/IMetric';
import { TimerEntry } from './TimerEntry';
import { User } from './User';

@Entity('timer_metrics')
@ObjectType({ implements: IMetric })
export class TimerMetric extends BaseEntity implements IMetric {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @Field(() => MetricType)
    public readonly metricType: MetricType = MetricType.TIMER;

    @ManyToOne(() => User, (user) => user.metrics)
    @Field(() => User)
    public user: User;

    @OneToMany(() => TimerEntry, (entry) => entry.metric, {
        cascade: true,
        nullable: false,
    })
    @Field(() => [TimerEntry])
    public metricEntries: TimerEntry[];

    @Column('varchar', { length: 32, default: '' })
    @Field(() => String)
    public label: string;

    @Column('varchar', { length: 256, default: '' })
    @Field(() => String)
    public description: string;

    /* The number of minutes an attempt should last to succeed */
    @Column('integer', { default: 25 })
    @Field(() => Int)
    public goalLength: number;

    /* The number of successful attempts required to fulfill the metric */
    @Column('integer', { default: 1 })
    @Field(() => Int)
    public goalPerDay: number;
}
