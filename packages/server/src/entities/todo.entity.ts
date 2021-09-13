import 'reflect-metadata';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
    TreeLevelColumn,
} from 'typeorm';
import Weekday, { weekdays } from '../types/enums/weekday.enum';
import { User } from './user.entity';

@Entity('todos')
@Tree('materialized-path')
@ObjectType()
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id!: string;

    @TreeChildren()
    @Field(() => [Todo])
    public subtasks!: Todo[];

    @TreeParent()
    public supertask!: Todo | null;

    @TreeLevelColumn()
    public level!: number;

    @ManyToOne(() => User)
    @Field(() => User)
    public user!: User;

    @Column('text', { default: 'New task' })
    @Field()
    public title!: string;

    @Column('text', { default: '' })
    @Field()
    public description!: string;

    @Column('boolean', { default: false })
    @Field()
    public isCompleted: boolean;

    @Column('boolean', { default: false })
    @Field()
    public isArchived!: boolean;

    @Column('enum', {
        enum: weekdays,
        array: true,
        default: [],
    })
    @Field(() => [Weekday])
    public repeatWeekdays!: Weekday[];

    @Field()
    public get doesRepeat(): boolean {
        return this.repeatWeekdays.length !== 0;
    }
}
