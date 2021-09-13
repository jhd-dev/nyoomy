import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../../entities/user.entity';
import { FieldError } from '../../../types/responses/field-error.model';

@ObjectType()
export class RegistrationResponse {
    @Field(() => [FieldError], { nullable: true })
    public errors: FieldError[] | null;

    @Field(() => User, { nullable: true })
    public user: User | null;
}
