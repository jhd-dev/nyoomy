import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Journal } from './Journal';

@Entity('journal_entries')
@ObjectType({
    description: "A single day's entry in a Journal",
})
export class JournalEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => Journal, { onDelete: 'CASCADE' })
    @Field(() => Journal)
    public metric: Journal;

    @Column('date')
    @Field()
    public date: Date;

    @Column('text', { default: '' })
    @Field()
    public text: string;

    @Field()
    public didMeetGoal: boolean;
}
