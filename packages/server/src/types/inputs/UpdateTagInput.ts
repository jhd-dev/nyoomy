import { Field, ID, InputType } from 'type-graphql';
import CategoryIcon from '../enums/CategoryIcon';
import type { Tag } from '../../entities/Tag';

@InputType()
export class UpdateTagInput implements Partial<Tag> {
    @Field(() => ID)
    public readonly id: string;

    @Field({ nullable: true })
    public title?: string;

    @Field(() => CategoryIcon, { nullable: true })
    public icon?: CategoryIcon | null;
}
