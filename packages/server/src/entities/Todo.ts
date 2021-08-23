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
import { SubTodo } from './SubTodo';
import { TodoEntry } from './TodoEntry';
import { User } from './User';

@Entity('todos')
@ObjectType({ implements: ITodo })
export class Todo extends BaseEntity implements ITodo {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => User, (user) => user.todos, {
        onDelete: 'CASCADE',
    })
    @Field(() => User)
    public user: User;

    @OneToMany(() => TodoEntry, (entry) => entry.todo)
    @Field(() => [TodoEntry])
    public entries: TodoEntry[];

    @OneToMany(() => SubTodo, (todo) => todo.supertask)
    @Field(() => [SubTodo])
    public subtasks: SubTodo[];

    @Column('text', { default: 'New task' })
    @Field(() => String)
    public title: string;

    @Column('text', { default: '' })
    @Field(() => String)
    public description: string;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isCompleted: boolean;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isArchived: boolean;

    @Column('enum', {
        enum: weekdays,
        array: true,
        default: [],
    })
    @Field(() => [Weekday])
    public repeatWeekdays: Weekday[];

    @Field(() => Boolean)
    public get doesRepeat(): boolean {
        return this.repeatWeekdays.length !== 0;
    }
}
