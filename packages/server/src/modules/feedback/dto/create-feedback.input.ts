import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFeedbackInput {
    @Field(() => ID)
    public readonly id: string;

    @Field()
    public purpose: string;

    @Field()
    public details: string;

    @Field(() => Int, { nullable: true })
    public rating?: number;

    @Field(() => Int, { nullable: true })
    public maxRating?: number;
}
