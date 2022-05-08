import 'reflect-metadata';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/models/user.entity';

@Entity('chats')
@ObjectType()
export class Chat {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    public readonly id!: string;

    @ManyToMany(() => User)
    @Field(() => User)
    public members!: User[];

    @Column('boolean', { default: false })
    @Field()
    public isArchived!: boolean;

    @CreateDateColumn()
    @Field(() => Date)
    public createdAt: Date;
}
