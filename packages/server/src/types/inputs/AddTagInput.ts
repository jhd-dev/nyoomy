import { Field, InputType } from 'type-graphql';
import CategoryIcon from '../enums/CategoryIcon';
import { Taggable } from '../interfaces/Taggable';
import type { Tag } from '../../entities/Tag';

@InputType()
export class AddTagInput implements Partial<Tag> {
    @Field()
    public title: string;

    @Field(() => Taggable, { nullable: true })
    public taggedItem?: Taggable | null;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;
}
