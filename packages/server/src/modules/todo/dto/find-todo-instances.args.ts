import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class FindTodoInstancesArgs {
    @Field(() => ID)
    public id: string;

    @Field(() => Date, { nullable: true })
    public fromDate?: Date;

    @Field(() => Date, { nullable: true })
    public untilDate?: Date;
}
