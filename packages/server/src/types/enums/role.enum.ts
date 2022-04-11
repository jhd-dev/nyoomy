import { registerEnumType } from '@nestjs/graphql';

enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

registerEnumType(Role, {
    name: 'Role',
    description: 'The authorization level of a user',
});

export default Role;

export const roles = [Role.USER, Role.ADMIN];
