import { Field, ArgsType } from 'type-graphql';
import type { User } from '../entity/User';

@ArgsType()
export class UserRegistrationInfo implements Partial<User> {
    @Field()
    name!: string;

    @Field()
    email!: string;

    @Field()
    username!: string;

    @Field()
    password!: string;
}
