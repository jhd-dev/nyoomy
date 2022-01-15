import { registerEnumType } from '@nestjs/graphql';

export enum RegistrationProblem {
    EMAIL_TAKEN = 0,
    USERNAME_TAKEN = 1,
}

registerEnumType(RegistrationProblem, {
    name: 'RegistrationProblem',
    description: 'Results of invalid user inputs when attempting registration',
});
