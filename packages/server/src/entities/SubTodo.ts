import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ITodo } from '../types/ITodo';
import Weekday, { weekdays } from '../types/Weekday';
import { Todo } from './Todo';
import { User } from './User';

@Entity('sub_todos')
@ObjectType({ implements: ITodo })
export class SubTodo extends BaseEntity implements ITodo {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => User, (user) => user.todos, {
        onDelete: 'CASCADE',
    })
    @Field(() => User)
    public user: User;

    @ManyToOne(() => Todo, (todo) => todo.subtasks, {
        onDelete: 'CASCADE',
    })
    @Field(() => Todo)
    public supertask: Todo;

    @OneToMany(() => SubTodo, (todo) => todo.supertask)
    @Field(() => [SubTodo])
    public subtasks: SubTodo[];

    @Column('text', { default: 'New subtask' })
    @Field(() => String)
    public title: string;

    @Column('text', { default: '' })
    @Field(() => String)
    public description: string;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isCompleted: boolean;

    @Field(() => Boolean)
    public isArchived: boolean;
}
