import { Field, InputType } from 'type-graphql';
import CategoryIcon from '../enums/CategoryIcon';
import { TaggableInput } from './TaggableInput';
import type { Tag } from '../../entities/Tag';

@InputType()
export class AddTagInput implements Partial<Tag> {
    @Field()
    public title: string;

    @Field(() => TaggableInput, { nullable: true })
    public taggedItem?: TaggableInput | null;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;
}
