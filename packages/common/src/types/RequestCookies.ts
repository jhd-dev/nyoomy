import { IRequestCookies } from './IRequestCookies';

export class RequestCookies implements IRequestCookies {
    public readonly refreshToken: string;
    public readonly accessToken: string;

    public constructor(refreshToken: string, accessToken?: string) {
        this.refreshToken = refreshToken;
        this.accessToken = accessToken ?? '';
    }
}
