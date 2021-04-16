import { Field, ArgsType } from 'type-graphql';

@ArgsType()
export class UserLoginInfo {
    @Field()
    public usernameOrEmail!: string;

    @Field()
    public password!: string;
}
