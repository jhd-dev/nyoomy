import 'reflect-metadata';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    ManyToOne,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { SelectionMetric } from './selection-metric.entity';
import { SelectionOption } from './selection-option.entity';

@Entity('selection_entries')
@ObjectType()
export class SelectionEntry {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => SelectionMetric, { onDelete: 'CASCADE' })
    @Field(() => SelectionMetric)
    public metric: SelectionMetric;

    @ManyToMany(() => SelectionOption, (option) => option.selectingEntries)
    @Field(() => [SelectionOption])
    public selectedOptions: SelectionOption[];

    @Column('timestamptz')
    @Field()
    public datetime: Date;
}
