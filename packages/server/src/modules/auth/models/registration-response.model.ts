import { ObjectType, Field } from '@nestjs/graphql';
import { FieldError } from '../../../types/responses/field-error.model';
import { SafeUser } from '../../user/models/safe-user.model';

@ObjectType()
export class RegistrationResponse {
    @Field(() => [FieldError], { nullable: true })
    public errors: FieldError[] | null;

    @Field(() => SafeUser, { nullable: true })
    public user: SafeUser | null;
}
