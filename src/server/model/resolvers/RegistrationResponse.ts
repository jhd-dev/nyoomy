import type { LoginResponse } from './LoginResponse';
import { ObjectType, Field } from 'type-graphql';
import { User } from '../entity/User';
import { FieldError } from './FieldError';

@ObjectType()
export class RegistrationResponse implements LoginResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field({ nullable: true })
    accessToken?: string;

    @Field(() => User, { nullable: true })
    user?: User;
}
