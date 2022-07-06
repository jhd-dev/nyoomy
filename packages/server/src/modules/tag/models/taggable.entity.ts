import {
    ManyToMany,
    PrimaryGeneratedColumn,
    Entity,
    JoinTable,
    RelationId,
    Column,
} from 'typeorm';
import { TagEntity } from './tag.entity';

@Entity('taggables')
export class TaggableEntity {
    @PrimaryGeneratedColumn()
    public readonly id: string;

    @ManyToMany(() => TagEntity, (tag) => tag.taggedItems, {
        cascade: ['insert', 'update', 'recover'],
    })
    @JoinTable()
    public tags: TagEntity[];

    // @Column('varchar', { array: true })
    // public tagIds: string[];
}
