import { Field, ArgsType } from 'type-graphql';
import type { User } from '../entity/User';

@ArgsType()
export class UserRegistrationInfo implements Partial<User> {
    @Field()
    public name!: string;

    @Field()
    public email!: string;

    @Field()
    public username!: string;

    @Field()
    public password!: string;
}
