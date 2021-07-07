import Redis from 'ioredis';
import { NODE_ENV } from '../env';

const redis: Redis.Redis = new Redis();

if (NODE_ENV === 'test') {
    void redis.flushall();
}

export default redis;
