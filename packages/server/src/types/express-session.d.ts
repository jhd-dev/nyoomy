// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { SessionData } from 'express-session';
import { User } from '../entities/User';

declare global {
    namespace Express {
        interface SessionData {
            userId: string;
            user?: User;
        }
    }
}
