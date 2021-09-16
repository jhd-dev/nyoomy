export interface IUserSettings {
    readonly id: number;
    language: string;
    pin?: string;
    pinTimeout?: number;
}
