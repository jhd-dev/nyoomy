import 'reflect-metadata';
import { Field, ID, ObjectType } from 'type-graphql';
import {
    Column,
    ManyToOne,
    Entity,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Taggable } from './Taggable';
import { User } from './User';

@Entity('metrics')
@ObjectType()
export class Metric {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @OneToOne(() => Taggable, { eager: true, persistence: true })
    @JoinColumn()
    @Field(() => Taggable)
    public taggable: Taggable;

    @ManyToOne(() => User)
    @Field(() => User)
    public user: User;

    @Column('varchar', { length: 64, default: '' })
    @Field()
    public title: string;

    @Column('varchar', { length: 256, default: '' })
    @Field()
    public description: string;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
