import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SelectionMetric } from './selection-metric.entity';

@Entity('selection_categories')
@ObjectType()
export class SelectionCategory {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => SelectionMetric, { onDelete: 'CASCADE' })
    @Field(() => SelectionMetric)
    public metric: SelectionMetric;

    @Column('varchar', { length: 128, default: 'New Category' })
    @Field()
    public title: string;
}
