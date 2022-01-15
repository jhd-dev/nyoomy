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
        console.log('gqllocalauthguard.canactivate');
        try {
            const gqlCtx = GqlExecutionContext.create(context);
            const ctx = gqlCtx.getContext<IContext>();
            console.log(ctx);
            console.log('localauthguard.canactivate');
            await super.canActivate(context);
            console.log('super.login');
            console.log(ctx.req);
            await super.logIn(ctx.req);
            console.log('/localauthguard.canactivate');
        } catch (err: unknown) {
            Logger.log(err);
        }
        return true;
    }

    public getRequest(context: ExecutionContext): Request {
        console.log('getRequest');
        const contextType = context.getType<GqlContextType>();
        console.log(contextType);
        if (contextType === 'graphql') {
            const gqlCtx = GqlExecutionContext.create(context);
            // const req = gqlCtx.getContext<Request>();
            // const loginInput =
            //     gqlCtx.getArgs<{ input: UserLoginInput }>().input;
            // req.body = loginInput;
            // console.log(loginInput);
            const { req } = gqlCtx.getContext<IContext>();
            console.log(gqlCtx.getArgs<{ input: UserLoginInput }>());
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
            console.log(req.body);
            console.log('/gqllocalauthguard.getRequest');
            return req;
        }
        console.log('not graphql');
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
