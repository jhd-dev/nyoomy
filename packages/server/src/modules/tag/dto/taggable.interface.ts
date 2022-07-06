import { Field, ID, InterfaceType } from '@nestjs/graphql';
import { TagDto } from './tag.dto';

@InterfaceType()
export abstract class Taggable {
    @Field(() => ID)
    public id: string;

    @Field(() => [TagDto])
    public tags: TagDto;
}
