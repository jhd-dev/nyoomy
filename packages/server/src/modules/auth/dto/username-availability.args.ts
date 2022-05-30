import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsernameAvailabilityArgs {
    @Field({ nullable: true })
    public username?: string;

    @Field(() => Int, { nullable: true })
    public recommendationsWanted?: number;
}
