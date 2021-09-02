import { Max, Min } from 'class-validator';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import MetricType from '../types/enums/MetricType';

@Entity('scales')
@ObjectType({
    description: 'A Numeric Rating Scale',
})
export class Scale {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    public metricType: MetricType = MetricType.SCALE;

    @Column('smallint', { default: 0 })
    @Field(() => Int)
    @Min(0)
    @Max(9)
    public min: number;

    @Column('smallint', { default: 5 })
    @Field(() => Int)
    @Min(1)
    @Max(10)
    public max: number;
}
