import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimerMetric } from './TimerMetric';

@Entity('timer_attempts')
@ObjectType()
export class TimerAttempt {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => TimerMetric, { onDelete: 'CASCADE' })
    @Field(() => TimerMetric)
    public metric: TimerMetric;

    @Column('timestamptz')
    @Field(() => Date)
    public startTime: Date;

    @Column('timestamptz', { nullable: true })
    @Field(() => Date)
    public endTime: Date;

    @Field(() => Boolean)
    public didFinish: boolean;

    @Field(() => Boolean, { nullable: true })
    public didSucceed: boolean | null;
}
