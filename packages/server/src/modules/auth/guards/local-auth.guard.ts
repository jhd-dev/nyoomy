import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const result = (await super.canActivate(context)) as boolean;
        const req = context.switchToHttp().getRequest<Request>();
        await super.logIn(req);
        return result;
    }
}
