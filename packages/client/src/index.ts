import { login } from './generated/graphql-hooks';

export interface INyoomyClientConfig {
    userId: string;
    apiKey: string;
}

export interface IApiConnectionResult {
    errors?: Error[];
}

export interface INyoomyClient {
    connect(): Promise<IApiConnectionResult>;
}

export default class NyoomyClient implements INyoomyClient {
    private readonly userId: string;
    private readonly apiKey: string;

    public constructor(config: INyoomyClientConfig) {
        if (typeof config.userId !== 'string') {
            throw new Error('userId of NyoomyApi must be a string.');
        }
        if (typeof config.apiKey !== 'string') {
            throw new Error('apiKey of NyoomyApi must be a string.');
        }
        this.userId = config.userId;
        this.apiKey = config.apiKey;
    }

    public async connect(): Promise<IApiConnectionResult> {
        return await login();
    }
}
