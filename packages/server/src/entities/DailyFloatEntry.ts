import 'reflect-metadata';
import { Field, ObjectType, Float, ID } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DailyFloatMetric } from './DailyFloatMetric';

@Entity('float_entries')
@ObjectType({
    description: "A single day's data for a particular DailyFloatMetric",
})
export class DailyFloatEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => DailyFloatMetric)
    @Field(() => DailyFloatMetric)
    public metric: DailyFloatMetric;

    @Column('date')
    @Field()
    public date: Date;

    @Column('float', { default: 0 })
    @Field(() => Float)
    public val: number;
}
