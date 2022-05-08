export interface IProfile {
    readonly id: string;
    displayName: string;
    isPublic: boolean;
    bio: string;
    birthday?: Date;
    picture?: string;
}
