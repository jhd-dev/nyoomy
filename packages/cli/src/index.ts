import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { HelloCommand } from './commands/hello';
import { WhoAmICommand } from './commands/whoami';
import { SCRIPT_NAME } from './constants';

void yargs(hideBin(process.argv))
    .scriptName(SCRIPT_NAME)
    .usage('$0 [command] [...options]')
    .command(new HelloCommand())
    .command(new WhoAmICommand())
    .help()
    .version(true)
    .alias('help', 'h')
    .alias('version', 'v')
    .strict().argv;
