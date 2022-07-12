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
    OneToMany,
    RelationId,
} from 'typeorm';
import { TaggableEntity } from '../../tag/models/taggable.entity';
import { User } from '../../user/models/user.entity';
import { TodoInstanceEntity } from './todo-instance.entity';

@Entity('todos')
@Tree('materialized-path')
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    public readonly id!: string;

    @TreeChildren()
    public children!: TodoEntity[];

    @TreeParent()
    public parent!: TodoEntity | null;

    @TreeLevelColumn()
    public level!: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    public user!: User;

    @Column({ name: 'user_id' })
    public userId: string;

    @Column('text', { default: 'New task' })
    public title!: string;

    @Column('text', { default: '' })
    public description!: string;

    @Column('boolean', { default: false, name: 'is_archived' })
    public isArchived!: boolean;

    @Column('boolean', { default: false, name: 'does_repeat' })
    public doesRepeat!: boolean;

    @Column('varchar', { nullable: true, name: 'repeat_pattern' })
    public repeatPattern?: string; // Cron expression

    @Column('timestamptz', { nullable: true, name: 'start_date' })
    public startDate?: Date;

    @Column('timestamptz', { nullable: true, name: 'end_date' })
    public endDate?: Date;

    @Column('integer', { default: 0 })
    public streak!: number;

    @Column('integer', { default: 0 })
    public largestStreak!: number;

    @OneToMany(() => TodoInstanceEntity, (instance) => instance.todo)
    public instances!: TodoInstanceEntity[];

    @OneToOne(() => TaggableEntity, { cascade: true, eager: true })
    @JoinColumn()
    public taggable: TaggableEntity;
}
