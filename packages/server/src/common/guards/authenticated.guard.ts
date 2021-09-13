import { Injectable } from '@nestjs/common';
import type { CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    public canActivate(context: ExecutionContext): boolean {
        try {
            return context
                .switchToHttp()
                .getRequest()
                .isAuthenticated() as boolean;
        } catch (err: unknown) {
            console.error(err);
            return false;
        }
    }
}
