#!/usr/bin/env ts-node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { SCRIPT_NAME } from './constants';

interface ICliArgs {
    help: boolean;
    _: (string | number)[];
    $0: string;
}
type YargsResult = { argv: ICliArgs };

const { argv }: YargsResult = yargs(hideBin(process.argv))
    .scriptName(SCRIPT_NAME)
    .usage('$0 [command] [...options]')
    .help()
    .alias('help', 'h')
    .version(true)
    .alias('version', 'v')
    .command({
        command: 'hello',
        describe: 'Print "Hello!"',
        handler(args) {
            console.info('Hello!');
            console.log(args);
        },
    });
