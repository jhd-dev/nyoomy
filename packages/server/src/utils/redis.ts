import { NODE_ENV } from '@nyoomy/global';
import Redis from 'ioredis';

const redis: Redis.Redis = new Redis();

if (NODE_ENV === 'test') {
    void redis.flushall();
}

export default redis;
