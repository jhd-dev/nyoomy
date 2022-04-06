import 'reflect-metadata';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/models/user.entity';
import { Chat } from './chat.entity';

@Entity('messages')
@ObjectType()
export class Message {
    @PrimaryGeneratedColumn('increment')
    @Field(() => ID)
    public readonly id!: number;

    @ManyToOne(() => User)
    @Field(() => User)
    public sender!: User;

    @ManyToOne(() => Chat)
    @Field(() => Chat)
    public chat!: Chat;

    @Column('text')
    @Field()
    public content!: string;

    @CreateDateColumn()
    @Field(() => Date)
    public sentAt: Date;

    @UpdateDateColumn()
    @Field(() => Date)
    public edittedAt: Date;
}
