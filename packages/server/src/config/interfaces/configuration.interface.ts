import type { IClientConfig } from './client.config';
import type { IDatabaseConfig } from './database.config';
import type { IEmailConfig } from './email.config';
import type { IEnvConfig } from './env.config';
import type { IRedisConfig } from './redis.config';

export interface IConfiguration {
    ENV: IEnvConfig;
    CLIENT: IClientConfig;
    DATABASE: IDatabaseConfig;
    EMAIL_TRANSPORTER: IEmailConfig;
    REDIS: IRedisConfig;
}
