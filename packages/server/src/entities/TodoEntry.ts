import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
} from 'typeorm';
import { Todo } from './Todo';

@Entity('todo_entries')
@ObjectType({
    description: "A single day's data for a particular CounterMetric",
})
export class TodoEntry extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => Todo, (todo) => todo.entries, {
        onDelete: 'CASCADE',
    })
    @Field(() => Todo)
    public todo: Todo;

    @Column('date')
    @Field(() => String)
    public date: string;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isCompleted: boolean;
}
