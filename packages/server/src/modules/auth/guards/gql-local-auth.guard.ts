/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable require-await */
import { Injectable, Logger } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import type { IContext } from '../../../types/interfaces/context.interface';
import type { UserLoginInput } from '../dto/login.input';
import type { ExecutionContext } from '@nestjs/common';
import type { GqlContextType } from '@nestjs/graphql';
import type { Request } from 'express';

@Injectable()
export class GqlLocalAuthGuard extends AuthGuard('local') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            const ctx = gqlCtx.getContext<IContext>();
            await super.canActivate(context);
            await super.logIn(ctx.req);
        } catch (err: unknown) {
            Logger.log(err);
        }
        return true;
    }

    public getRequest(context: ExecutionContext): Request {
        const contextType = context.getType<GqlContextType>();
        if (contextType === 'graphql') {
            const gqlCtx = GqlExecutionContext.create(context);
            const { req } = gqlCtx.getContext<IContext>();
            const { usernameOrEmail, passwordInput } =
                gqlCtx.getArgs<{ input: UserLoginInput }>().input;
            req.body = {
                usernameOrEmail,
                passwordInput,
                username: usernameOrEmail,
                password: passwordInput,
            };
            req.params = {
                usernameOrEmail,
                passwordInput,
                username: usernameOrEmail,
                password: passwordInput,
            };
            return req;
        }
        return context.switchToHttp().getRequest<Request>();
    }

    public handleRequest<TUser = any>(
        err: any,
        user: any,
        info: any,
        context: any,
        status?: any
    ): TUser {
        console.log({ err, user, info, context, status });
        return super.handleRequest(err, user, info, context, status);
    }
}
