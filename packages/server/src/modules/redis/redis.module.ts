import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisClient } from './providers/redis-client.provider';
import { REDIS } from './redis.constants';
import { RedisService } from './redis.service';

@Module({
    imports: [ConfigModule],
    providers: [RedisService, redisClient, ConfigService],
    exports: [RedisService, REDIS],
})
export class RedisModule {}
