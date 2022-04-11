import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Journal } from './journal.entity';

@Entity('journal_entries')
@ObjectType()
export class JournalEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => Journal, { onDelete: 'CASCADE' })
    @Field(() => Journal)
    public journal: Journal;

    @Column()
    @Field()
    public date: string;

    @Column('text')
    @Field()
    public content: string;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isCompleted: boolean;
}
