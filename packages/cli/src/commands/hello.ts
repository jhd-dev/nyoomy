import { BaseCommand } from './base';

export class HelloCommand extends BaseCommand {
    public constructor() {
        super('hello', [], 'Print "Hello!"');
    }

    public handler() {
        console.info('Hello!');
    }
}
