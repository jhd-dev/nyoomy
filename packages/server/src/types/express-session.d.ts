// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { User as UserEntity } from '../modules/user/models/user.entity';

declare global {
    namespace Express {
        interface SessionData {
            userId?: string;
            user?: UserEntity;
        }
    }
}

declare module 'express-session' {
    interface SessionData {
        userId?: string;
        user?: UserEntity;
    }
}
