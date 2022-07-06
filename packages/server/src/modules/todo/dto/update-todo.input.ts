import {
    Field,
    InputType,
    IntersectionType,
    OmitType,
    PartialType,
    PickType,
} from '@nestjs/graphql';
import { UpdateTagInput } from '../../tag/dto/update-tag.input';
import { TodoDto } from './todo.dto';

@InputType()
export class UpdateTodoInput extends IntersectionType(
    PartialType(
        OmitType(TodoDto, ['id', 'parent', 'subtasks', 'tags'] as const)
    ),
    PickType(TodoDto, ['id'] as const),
    InputType
) {
    @Field(() => [UpdateTagInput], { nullable: true })
    public tagUpdates?: UpdateTagInput[];
}
