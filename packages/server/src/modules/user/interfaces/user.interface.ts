import type Role from '../../../types/enums/role.enum';

export interface IUser {
    readonly id: string;

    role: Role;
    username: string;
    email: string;
    isEmailVerified: boolean;
    password: string;
    resetPasswordToken?: string;

    readonly createdAt: Date;
    lastUpdated: Date;
    deletedAt?: Date;

    stars: number;
}
