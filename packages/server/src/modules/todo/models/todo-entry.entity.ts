import 'reflect-metadata';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo.entity';

@Entity('todo_entries')
@ObjectType({
    description: "A single day's data for a particular Todo",
})
export class TodoEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => Todo, { onDelete: 'CASCADE' })
    @Field(() => Todo)
    public todo: Todo;

    @Column()
    @Field()
    public date: string;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isCompleted: boolean;
}
