import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity('friend_request')
export class FriendRequest extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Field(() => User)
    @Column({
        update: false,
        type: 'uuid',
    })
    public readonly sender: string;

    @Field(() => User)
    @Column({
        update: false,
        type: 'uuid',
    })
    public readonly recipient: string;

    @Field(() => Date)
    @Column({
        update: false,
    })
    public readonly createdAt: Date;
}
