import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class LoginResponse {
    @Field(() => User, { nullable: true })
    public user: User | null;

    @Field(() => String, { nullable: true })
    public error: string | null;
}
