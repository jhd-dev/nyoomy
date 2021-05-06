import { Field, ArgsType } from 'type-graphql';
import type { User } from '../entities/User';

@ArgsType()
export class UserRegistrationInfo implements Partial<User> {
    @Field()
    public displayName!: string;

    @Field()
    public email!: string;

    @Field()
    public username!: string;

    @Field()
    public password!: string;
}
