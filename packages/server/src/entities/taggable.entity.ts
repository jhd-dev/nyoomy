import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ManyToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Tag } from './tag.entity';

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
