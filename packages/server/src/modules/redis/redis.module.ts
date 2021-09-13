import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { REDIS_PORT } from '../../env';

export const REDIS_SYMBOL = Symbol('REDIS');

@Module({
    providers: [
        {
            provide: REDIS_SYMBOL,
            useValue: createClient({ port: REDIS_PORT, host: 'localhost' }),
        },
    ],
    exports: [REDIS_SYMBOL],
})
export class RedisModule {}
