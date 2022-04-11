import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('journals')
@ObjectType()
export class Journal {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @Column('integer', { default: 0 })
    @Field(() => Int)
    public dailyWordGoal: number;

    @Column('boolean', { default: false })
    @Field()
    public isArchived: boolean;
}
