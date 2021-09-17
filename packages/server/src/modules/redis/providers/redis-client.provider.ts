import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
import { REDIS } from '../redis.constants';
import type { Provider } from '@nestjs/common';
import type { RedisClient } from 'redis';

export const redisClient: Provider = {
    provide: REDIS,
    useFactory: (configService: ConfigService): RedisClient =>
        createClient({ port: configService.get<number>('redis.port', 6379) }),
    inject: [ConfigService],
};
