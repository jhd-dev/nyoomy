import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { JournalEntry } from './JournalEntry';
import { User } from './User';

@Entity('journals')
@ObjectType()
export class Journal extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => User, (user) => user.journals, {
        onDelete: 'CASCADE',
    })
    @Field(() => User)
    public user: User;

    @OneToMany(() => JournalEntry, (entry) => entry.journal)
    @Field(() => [JournalEntry])
    public entries: JournalEntry[];

    @Column('text', { default: 'New Journal' })
    @Field()
    public title: string;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public dailyWordGoal: number;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;

    @CreateDateColumn({ type: 'timestamptz' })
    @Field(() => Date)
    public readonly createdAt: Date;
}
