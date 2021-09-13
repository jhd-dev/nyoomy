import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { ExecutionContext } from '@nestjs/common';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const result = (await super.canActivate(context)) as boolean;
        await super.logIn(context.switchToHttp().getRequest());
        return result;
    }
}
