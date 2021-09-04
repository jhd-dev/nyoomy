import 'reflect-metadata';
import { Max, Min } from 'class-validator';
import { Field, ObjectType, Int, ID } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Scale } from './Scale';

@Entity('scale_entries')
@ObjectType()
export class ScaleEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => Scale, { onDelete: 'CASCADE' })
    @Field(() => Scale)
    public metric: Scale;

    @Column('timestamptz')
    @Field()
    public datetime: Date;

    @Column('smallint')
    @Field(() => Int)
    @Min(0)
    @Max(10)
    public chosenValue: number;
}
