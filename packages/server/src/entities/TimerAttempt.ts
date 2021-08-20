import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
} from 'typeorm';
import { TimerEntry } from './TimerEntry';

@Entity('timer_attempts')
@ObjectType()
export class TimerAttempt extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => TimerEntry, (entry) => entry.attempts)
    @Field(() => TimerEntry)
    public entry: TimerEntry;

    @Column('varchar')
    @Field(() => String)
    public startTime: string;

    @Column('varchar', { nullable: true })
    @Field(() => String)
    public endTime: string;

    @Field(() => Boolean)
    public didFinish: boolean;

    @Field(() => Boolean, { nullable: true })
    public didSucceed: boolean | null;
}
