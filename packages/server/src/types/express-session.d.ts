// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { User } from '../modules/user/models/user.entity';
import type { SessionData } from 'express-session';

declare global {
    namespace Express {
        interface SessionData {
            userId: string;
            user?: User;
        }
    }
}
