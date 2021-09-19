#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { SCRIPT_NAME } from './constants';
import { HelloCommand } from './commands/hello';

yargs(hideBin(process.argv))
    .scriptName(SCRIPT_NAME)
    .usage('$0 [command] [...options]')
    .command(new HelloCommand())
    .help()
    .version(true)
    .alias('help', 'h')
    .alias('version', 'v')
    .strict().argv;
