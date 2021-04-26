#!/usr/bin/env ts-node

import NyoomyClient from '@nyoomy/client';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface ICliArgs {
    help: boolean;
    _: (string | number)[];
    $0: string;
}

const argv: ICliArgs = yargs(hideBin(process.argv))
    .scriptName('nyoomy-cli')
    .usage('$0 ???')
    .help()
    .alias('help', 'h')
    .default('help', false)
    .version(false).argv;

console.log(argv);

const client = new NyoomyClient({});
