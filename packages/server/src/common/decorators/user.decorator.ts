/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { User } from '../../modules/user/models/user.entity';
import type { IContext } from '../../types/interfaces/context.interface';
import type { ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (_data: keyof User, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context).getContext<IContext>();
        return ctx.req.user ?? ctx.user;
    }
);
