import type { LoginResponse } from './LoginResponse';
import { ObjectType, Field } from 'type-graphql';
import { User } from '../entity/User';
import { FieldError } from './FieldError';

@ObjectType()
export class RegistrationResponse implements LoginResponse {
    @Field(() => [FieldError], { nullable: true })
    public errors?: FieldError[];

    @Field({ nullable: true })
    public accessToken?: string;

    @Field(() => User, { nullable: true })
    public user?: User;
}
