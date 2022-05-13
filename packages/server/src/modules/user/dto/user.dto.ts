import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SafeUser } from '../models/safe-user.model';

@ObjectType({
    description: 'An account and its client-safe fields',
    implements: () => [SafeUser],
})
export class UserDto extends SafeUser {
    @Field(() => ID)
    public readonly id: string;
}
