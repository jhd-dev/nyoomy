import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TimerAttempt } from './TimerAttempt';
import { TimerMetric } from './TimerMetric';

@Entity('timer_entries')
@ObjectType()
export class TimerEntry extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => TimerMetric, (metric) => metric.metricEntries)
    @Field(() => TimerMetric)
    public metric: TimerMetric;

    @Column('date')
    @Field(() => String)
    public date: string;

    @OneToMany(() => TimerAttempt, (attempt) => attempt.entry, {
        cascade: true,
        nullable: false,
    })
    @Field(() => [TimerAttempt])
    public attempts: TimerAttempt[];
}
