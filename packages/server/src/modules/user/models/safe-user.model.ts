import { ObjectType, OmitType } from '@nestjs/graphql';
import { User } from './user.entity';
import type { ISafeUser } from '../interfaces/safe-user.interface';

const UNSAFE_FIELDS = ['password'] as const;

@ObjectType({ description: 'User data excluding authentication-unsafe fields' })
export class SafeUser
    extends OmitType(User, UNSAFE_FIELDS)
    implements ISafeUser
{
    public password?: undefined;
}
