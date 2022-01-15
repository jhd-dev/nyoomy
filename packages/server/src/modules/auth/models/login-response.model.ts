import { Field, ObjectType } from '@nestjs/graphql';
import { SafeUser } from '../../user/models/safe-user.model';

@ObjectType()
export class LoginResponse {
    @Field(() => SafeUser, { nullable: true })
    public user: SafeUser | null;

    @Field(() => String, { nullable: true })
    public error: string | null;
}
