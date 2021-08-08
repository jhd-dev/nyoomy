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
import { CounterEntry } from './CounterEntry';
import { User } from './User';

@Entity()
@ObjectType()
export class CounterMetric extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @Column('varchar', { length: 32, default: '' })
    @Field(() => String)
    public label: string;

    @Column('varchar', { length: 256, default: '' })
    @Field(() => String)
    public description: string;

    // @Column('varchar', { length: 32 })
    // @Field(() => String)
    // public readonly metricType: string = 'counter';

    @ManyToOne(() => User, (user) => user.metrics)
    @Field(() => User)
    public user: User;

    @OneToMany(() => CounterEntry, (entry) => entry.metric, {
        cascade: true,
        nullable: false,
    })
    @Field(() => [CounterEntry])
    public metricEntries: CounterEntry[];

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
