import { CommandModule } from 'yargs';
import { BaseCommand } from './base';

export class HelloCommand extends BaseCommand implements CommandModule {
    public constructor() {
        super('hello', [], 'Print "Hello!"');
    }

    public handler() {
        console.info('Hello!');
    }
}
