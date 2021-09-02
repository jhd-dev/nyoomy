import { Field, ObjectType } from 'type-graphql';
import { User } from '../../entities/User';

@ObjectType()
export class LoginResponse {
    @Field(() => User, { nullable: true })
    public user: User | null;

    @Field(() => String, { nullable: true })
    public error: string | null;
}
