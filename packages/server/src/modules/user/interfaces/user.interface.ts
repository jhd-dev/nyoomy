export interface IUser {
    readonly id: string;

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
