/* eslint-disable @typescript-eslint/no-unsafe-return */

import 'reflect-metadata';
import { Field, ObjectType, Int, ID, Directive } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    // VersionColumn,
} from 'typeorm';

const MIDNIGHT: string = new Date(0).toTimeString().split(' ')[0];

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column('varchar', { length: 64 })
    @Field(() => String)
    public displayName: string;

    @Column('varchar', { unique: true, length: 64 })
    @Field(() => String)
    public username: string;

    @Column('varchar', { unique: true, length: 254 })
    @Field(() => String)
    @Directive('@lowercase')
    public email: string;

    @Column('varchar', { length: 256 })
    public password: string;

    @Column('integer', { default: 0, nullable: true })
    @Field(() => Int)
    public tokenVersion: number;

    @Column('varchar', { nullable: true })
    public resetPasswordToken: string;

    @Column('date')
    @Field(() => String)
    public birthday: string;

    @Column('varchar', { nullable: true })
    @Field(() => String)
    public picture: string;

    @Column('boolean', { default: true })
    @Field(() => Boolean)
    public isPublic: boolean;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isEmailVerified: boolean;

    @Column('text', { default: '' })
    @Field(() => String)
    public bio: string;

    @Column('time', { default: MIDNIGHT })
    @Field(() => String)
    public cron: string;

    // @VersionColumn('integer')
    // @Field(() => Int)
    // public version: number;

    // @Column('uuid', { array: true, default: [] })
    // @Field(() => [FriendRequest])
    // public outgoingFriendRequests: FriendRequest[];

    // @Column('uuid', { array: true, default: [] })
    // @Field(() => [User])
    // public following: User[];

    @CreateDateColumn({ type: 'timestamptz' })
    @Field(() => Date)
    public readonly createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    public lastUpdated: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    public deletedAt: Date;
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
