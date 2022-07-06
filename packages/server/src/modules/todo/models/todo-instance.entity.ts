/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TodoEntity } from './todo.entity';

@Entity('todo_instances')
export class TodoInstanceEntity {
    @PrimaryGeneratedColumn()
    public id!: string;

    @ManyToOne(() => TodoEntity, (todo) => todo.instances)
    @JoinColumn({ name: 'todoId' })
    public todo!: TodoEntity;

    @Column('varchar')
    public todoId!: string;

    @Column('timestamptz')
    public dueDate?: Date;

    @Column('timestamptz')
    public offsetDueDate?: Date;

    @Column('boolean', { default: false })
    public isCompleted!: boolean;
}
