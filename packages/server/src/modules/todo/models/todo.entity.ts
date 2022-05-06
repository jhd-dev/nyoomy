import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
    TreeLevelColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import Weekday, { weekdays } from '../../../types/enums/weekday.enum';
import { Tag } from '../../tag/models/tag.entity';
import { Taggable } from '../../tag/models/taggable.entity';
import { User } from '../../user/models/user.entity';

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
    @Field(() => Todo, { nullable: true, defaultValue: null })
    public supertask!: Todo | null;

    @TreeLevelColumn()
    @HideField()
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

    @Field(() => [Tag])
    public tags: Tag[];

    @OneToOne(() => Taggable, { cascade: true, eager: true })
    @JoinColumn()
    @HideField()
    public taggable: Taggable;

    @Field()
    public get doesRepeat(): boolean {
        return this.repeatWeekdays.length !== 0;
    }
}
