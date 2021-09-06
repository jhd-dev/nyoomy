import type { IContext } from '../types/interfaces/IContext';
import type { MiddlewareFn } from 'type-graphql';

interface ILogInput {
    args?: boolean;
    context?: boolean;
    info?: boolean;
    root?: boolean;
    time?: boolean;
    heading?: string;
}

const defaultInput = {
    args: true,
    context: true,
    info: true,
    root: true,
    time: true,
    heading: '',
};

export function Log(options: ILogInput = defaultInput): MiddlewareFn<IContext> {
    return async ({ args, context, info, root }, next) => {
        console.info(options.heading ?? '');
        if (options?.args) console.info(args);
        if (options?.context) console.info(context);
        if (options?.info) console.info(info);
        if (options?.root) console.info(root);
        const start = Date.now();
        await next();
        if (options?.time) {
            const resolveTime = Date.now() - start;
            console.info(`[${resolveTime} ms]`);
        }
    };
}
