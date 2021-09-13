import 'reflect-metadata';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimerMetric } from './timer-metric.entity';

@Entity('timer_entries')
@ObjectType()
export class TimerEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => TimerMetric, { onDelete: 'CASCADE' })
    @Field(() => TimerMetric)
    public metric: TimerMetric;

    @Column('date')
    @Field()
    public date: Date;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
