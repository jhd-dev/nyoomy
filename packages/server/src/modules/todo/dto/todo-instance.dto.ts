import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { TagEntity } from '../../tag/models/tag.entity';
import { TodoDto } from './todo.dto';

@ObjectType({
    description: 'Particular instance of a potentially repeating todo.',
})
export class TodoInstance {
    @Field(() => ID)
    public id!: string;

    @HideField()
    public todoId: string;

    @Field(() => TodoDto)
    public todo!: TodoDto;

    @Field(() => Date, { nullable: true })
    public dueDate?: Date;

    @Field(() => Date, { nullable: true })
    public offsetDueDate?: Date;

    @Field()
    public isCompleted!: boolean;
}
