import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
    Column,
    JoinTable,
    ManyToMany,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { SelectionCategory } from './selection-category.entity';
import { SelectionEntry } from './selection-entry.entity';
import { SelectionMetric } from './selection-metric.entity';

@Entity('selection_options')
@ObjectType()
export class SelectionOption {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToOne(() => SelectionMetric, { onDelete: 'CASCADE' })
    @Field(() => SelectionMetric)
    public metric: SelectionMetric;

    @ManyToMany(
        () => SelectionEntry,
        (entry: SelectionEntry) => entry.selectedOptions
    )
    @JoinTable()
    @Field(() => [SelectionEntry])
    public selectingEntries: SelectionEntry[];

    @ManyToOne(() => SelectionCategory)
    @Field(() => SelectionCategory)
    public category: SelectionCategory;

    @Column('varchar', { length: 128 })
    @Field()
    public title: string;
}
