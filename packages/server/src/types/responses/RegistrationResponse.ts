import { ObjectType, Field } from 'type-graphql';
import { User } from '../../entities/User';
import { FieldError } from './FieldError';

@ObjectType()
export class RegistrationResponse {
    @Field(() => [FieldError], { nullable: true })
    public errors: FieldError[] | null;

    @Field(() => User, { nullable: true })
    public user: User | null;
}
