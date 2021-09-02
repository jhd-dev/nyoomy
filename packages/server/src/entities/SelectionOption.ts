import { Field, ID, ObjectType } from 'type-graphql';
import {
    Column,
    JoinTable,
    ManyToMany,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { SelectionCategory } from './SelectionCategory';
import { SelectionEntry } from './SelectionEntry';
import { SelectionMetric } from './SelectionMetric';

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
