import { Injectable, Inject } from '@nestjs/common';
import { RedisClient } from 'redis';
import { REDIS } from './redis.constants';

@Injectable()
export class RedisService {
    public constructor(
        @Inject(REDIS)
        private readonly redisClient: RedisClient
    ) {}
}
