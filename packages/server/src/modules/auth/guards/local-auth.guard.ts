import { Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        console.log('localauthguard.canactivate');
        const result = (await super.canActivate(context)) as boolean;
        console.log('super.login');
        const req = context.switchToHttp().getRequest<Request>();
        Logger.log(req, 'req');
        console.log('REQ');
        console.log(req);
        await super.logIn(req);
        console.log('/localauthguard.canactivate');
        return result;
    }
}
