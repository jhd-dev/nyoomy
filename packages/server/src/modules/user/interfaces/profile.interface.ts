export interface IProfile {
    readonly id: number;
    displayName: string;
    isPublic: boolean;
    bio: string;
    birthday?: Date;
    picture?: string;
}
