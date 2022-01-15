import { Field, ObjectType } from '@nestjs/graphql';
import { RegistrationProblem } from '../../../types/enums/registration-problem';
import { User } from '../../user/models/user.entity';

@ObjectType()
export class RegistrationResult {
    @Field(() => User, { nullable: true })
    public user: User | null;

    @Field(() => RegistrationProblem, { nullable: true })
    public problem: RegistrationProblem | null;
}
