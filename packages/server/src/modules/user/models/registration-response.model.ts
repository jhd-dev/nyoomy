import { ObjectType, Field } from '@nestjs/graphql';
import { FieldError } from '../../../types/responses/field-error.model';
import { User } from './user.entity';

@ObjectType()
export class RegistrationResponse {
    @Field(() => [FieldError], { nullable: true })
    public errors: FieldError[] | null;

    @Field(() => User, { nullable: true })
    public user: User | null;
}
