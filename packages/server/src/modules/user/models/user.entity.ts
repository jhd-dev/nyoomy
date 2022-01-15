/* eslint-disable @typescript-eslint/no-unsafe-return */

import {
    Field,
    ObjectType,
    Int,
    ID,
    HideField,
    Directive,
} from '@nestjs/graphql';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import type { IUser } from '../interfaces/user.interface';

@Entity('users')
@ObjectType({ description: 'Centralized user reference' })
export class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column('varchar', { unique: true, length: 32 })
    @Field()
    public username: string;

    @Column('varchar', { unique: true, length: 254 })
    @Field()
    @Directive('@lowercase')
    public email: string;

    @Column('varchar', { length: 256 })
    @HideField()
    public password: string;

    @Column('boolean', { default: false })
    @Field()
    public isEmailVerified: boolean;

    @Column('text', { nullable: true })
    @Field()
    public googleId?: string;

    @Column('varchar', { nullable: true })
    @HideField()
    public resetPasswordToken?: string;

    @CreateDateColumn({ type: 'timestamptz' })
    @Field()
    public readonly createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    @HideField()
    public lastUpdated: Date;

    @DeleteDateColumn({ type: 'timestamptz', nullable: true })
    @HideField()
    public deletedAt?: Date;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public stars: number;
}

/* eslint-enable @typescript-eslint/no-unsafe-return */
