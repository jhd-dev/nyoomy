import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddTodoInstanceInput {
    @Field()
    public todoId: string;

    @Field({ nullable: true })
    public dueDate?: Date;
}
