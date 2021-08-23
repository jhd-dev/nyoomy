/* eslint-disable @typescript-eslint/no-unsafe-return */

import 'reflect-metadata';
import { Field, ObjectType, Int, ID, Directive } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { CounterMetric } from './CounterMetric';
import { TimerMetric } from './TimerMetric';
import { Todo } from './Todo';

const MIDNIGHT: string = new Date(0).toTimeString().split(' ')[0];

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column('varchar', { length: 32 })
    @Field(() => String)
    public displayName: string;

    @Column('varchar', { unique: true, length: 32 })
    @Field(() => String)
    public username: string;

    @Column('varchar', { unique: true, length: 254 })
    @Field(() => String)
    @Directive('@lowercase')
    public email: string;

    @Column('varchar', { length: 256 })
    public password: string;

    @Column('integer', { default: 0, nullable: true })
    @Field(() => Int)
    public tokenVersion: number;

    @Column('varchar', { nullable: true })
    public resetPasswordToken: string;

    @Column('date', { nullable: true })
    @Field(() => String)
    public birthday: string;

    @Column('varchar', { nullable: true })
    @Field(() => String)
    public picture: string;

    @Column('boolean', { default: true })
    @Field(() => Boolean)
    public isPublic: boolean;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isEmailVerified: boolean;

    @Column('text', { default: '' })
    @Field(() => String)
    public bio: string;

    @Column('time', { default: MIDNIGHT })
    @Field(() => String)
    public cron: string;

    @Column('varchar', { default: 'en_US', length: 35 })
    @Field(() => String)
    public language: string;

    @OneToMany(() => CounterMetric, (metric) => metric.user, {
        cascade: true,
    })
    @Field(() => [CounterMetric])
    public metrics: CounterMetric[];

    @OneToMany(() => TimerMetric, (metric) => metric.user, { cascade: true })
    @Field(() => [TimerMetric])
    public timerMetrics: TimerMetric[];

    @OneToMany(() => Todo, (todo) => todo.user)
    @Field(() => [Todo])
    public todos: Todo[];

    @CreateDateColumn({ type: 'timestamptz' })
    @Field(() => Date)
    public readonly createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    public lastUpdated: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    public deletedAt: Date;
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
