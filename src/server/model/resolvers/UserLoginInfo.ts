import { Field, ArgsType } from 'type-graphql';

@ArgsType()
export class UserLoginInfo {
    @Field()
    usernameOrEmail!: string;

    @Field()
    password!: string;
}
