import { InterfaceType, Field } from 'type-graphql';
import { ManyToMany } from 'typeorm';
import { Tag } from '../../entities/Tag';

@InterfaceType()
export class Taggable {
    @ManyToMany(() => Tag, (tag: Tag) => tag.taggedItems)
    @Field(() => [Tag])
    public tags: Tag[];
}
