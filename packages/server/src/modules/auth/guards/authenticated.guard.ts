import { Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { IContext } from '../../../types/interfaces/context.interface';
import type { CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    public canActivate(context: ExecutionContext): boolean {
        console.log('authenticatedguard.canactivate');
        try {
            const ctx = GqlExecutionContext.create(context);
            const { req } = ctx.getContext<IContext>();
            console.log(req);
        } catch (err: unknown) {
            Logger.log(err);
        }
        return true;
    }
}
