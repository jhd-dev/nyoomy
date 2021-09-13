import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserLoginInfo {
    @Field()
    public usernameOrEmail: string;

    @Field()
    public password: string;
}
