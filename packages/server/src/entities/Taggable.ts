import { Field, ID, ObjectType } from 'type-graphql';
import { ManyToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Tag } from './Tag';

@Entity('taggables')
@ObjectType()
export class Taggable {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    public readonly id: string;

    @ManyToMany(() => Tag, (tag: Tag) => tag.taggedItems)
    @Field(() => [Tag])
    public tags: Tag[];
}
