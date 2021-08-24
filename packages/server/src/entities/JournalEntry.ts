import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
} from 'typeorm';
import { Journal } from './Journal';

@Entity('journal_entries')
@ObjectType({
    description: "A single day's entry in a Journal",
})
export class JournalEntry extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => Journal, (journal) => journal.entries, {
        onDelete: 'CASCADE',
    })
    @Field(() => Journal)
    public journal: Journal;

    @Column('date')
    @Field()
    public date: string;

    @Column('text', { default: '' })
    @Field()
    public text: string;

    @Field()
    public didMeetGoal: boolean;
}
