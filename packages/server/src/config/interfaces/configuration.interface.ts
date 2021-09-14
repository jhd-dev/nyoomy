import type { IAuthConfig } from './auth.config.interface';
import type { IDatabaseConfig } from './database.config.interface';
import type { IEmailTransporterConfig } from './email-transporter.config.interface';
import type { IRedisConfig } from './redis.config.interface';

export interface IConfiguration {
    nodeEnv: string;
    __dev__: boolean;
    __prod__: boolean;
    __test__: boolean;
    port: number;
    publicUri: string;
    database: IDatabaseConfig;
    redis: IRedisConfig;
    auth: IAuthConfig;
    emailTransporter: IEmailTransporterConfig;
}
