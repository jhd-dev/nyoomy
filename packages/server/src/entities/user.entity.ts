/* eslint-disable @typescript-eslint/no-unsafe-return */

import 'reflect-metadata';
import { Field, ObjectType, Int, Directive, ID } from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import type { IUser } from '../modules/user/interfaces/user.interface';

@Entity('users')
@ObjectType()
export class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id!: string;

    @Column('varchar', { length: 32 })
    @Field()
    public displayName!: string;

    @Column('varchar', { unique: true, length: 32 })
    @Field()
    public username!: string;

    @Column('varchar', { unique: true, length: 254 })
    @Field()
    @Directive('@lowercase')
    public email!: string;

    @Column('varchar', { length: 256 })
    public password!: string;

    @Column('integer', { default: 0, nullable: true })
    @Field(() => Int)
    public tokenVersion!: number;

    @Column('varchar', { nullable: true })
    public resetPasswordToken!: string;

    @Column('boolean', { default: false })
    @Field(() => Boolean)
    public isEmailVerified!: boolean;

    @Column('date', { nullable: true })
    @Field()
    public birthday!: Date;

    @Column('varchar', { nullable: true })
    @Field()
    public picture!: string;

    @Column('boolean', { default: true })
    @Field(() => Boolean)
    public isPublic!: boolean;

    @Column('text', { default: '' })
    @Field()
    public bio!: Date;

    // @Column('time', { default: MIDNIGHT })
    // @Field()
    // public cron: Date;

    @Column('varchar', { default: 'en_US', length: 35 })
    @Field()
    public language!: string;

    @Column('varchar', { length: 4, nullable: true })
    @Field()
    public pin!: string;

    @Column('smallint', { nullable: true })
    @Field(() => Int)
    public pinTimeout!: number;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public stars!: number;

    @CreateDateColumn({ type: 'timestamptz' })
    public readonly createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    public lastUpdated: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    public deletedAt: Date;
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
