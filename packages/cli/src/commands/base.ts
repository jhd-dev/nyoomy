import type { IBaseCliArgs } from '../types';
import type { Argv, CommandModule } from 'yargs';

export abstract class BaseCommand implements CommandModule {
    public constructor(
        public readonly command: string,
        public readonly aliases: string[],
        public readonly describe: string
    ) {}

    public builder(yargs: Argv): Argv {
        return yargs;
    }

    public abstract handler(args: IBaseCliArgs): void;
}
