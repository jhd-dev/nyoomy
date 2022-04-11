import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/models/user.entity';

@Entity('journals')
@ObjectType()
export class Journal {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => User)
    @Field(() => User)
    public user!: User;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public dailyWordGoal: number;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
