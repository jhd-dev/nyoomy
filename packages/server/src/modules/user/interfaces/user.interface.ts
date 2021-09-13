export interface IUser {
    readonly id: string;
    displayName: string;
    username: string;
    email: string;
    password: string;
    tokenVersion: number;
    resetPasswordToken: string;
    isEmailVerified: boolean;
    birthday: Date;
    picture: string;
    isPublic: boolean;
    bio: Date;
    language: string;
    pin: string;
    pinTimeout: number;
    stars: number;
    readonly createdAt: Date;
    lastUpdated: Date;
    deletedAt: Date;
}
