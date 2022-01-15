import { BaseCommand } from './base';

export class HelloCommand extends BaseCommand {
    public constructor() {
        super('hello', [], 'Print "Hello!"');
    }

    public handler(): void {
        console.info('Hello!');
    }
}
