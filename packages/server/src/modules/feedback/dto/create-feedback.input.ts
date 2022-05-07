import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFeedbackInput {
    @Field()
    public purpose: string;

    @Field()
    public details: string;

    @Field(() => Int, {
        nullable: true,
        description:
            "The user's rating out of 10, e.g. 2.5 of 5 stars would yield a value of 5",
    })
    public rating?: number;

    @Field(() => Int, {
        nullable: true,
        description:
            'The maximum rating a user had the option to give, i.e. 5 stars',
    })
    public maxRating?: number;
}
