import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
    @Field()
    public usernameOrEmail: string;

    @Field()
    public passwordInput: string;
}
