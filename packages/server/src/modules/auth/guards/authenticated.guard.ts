import { Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { LoggerService } from '../../logger/logger.service';
import type { IContext } from '../../../types/interfaces/context.interface';
import type { CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    public constructor(private readonly logger: LoggerService) {
        this.logger.setContext(AuthenticatedGuard.name);
    }

    public canActivate(context: ExecutionContext): boolean {
        this.logger.debug('authenticatedguard.canactivate');
        try {
            const ctx = GqlExecutionContext.create(context);
            const { req } = ctx.getContext<IContext>();
            req;
        } catch (err: unknown) {
            this.logger.error(err);
        }
        return true;
    }
}
