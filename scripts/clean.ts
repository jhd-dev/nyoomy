#!/usr/bin/env ts-node

/**
 * Recursively deletes unnecessary files and/or directories. Necessary due to
 * rimraf CLI bugs.
 *
 * @param {boolean} [verbose] List files/globs as they are deleted
 * @param {boolean} [quiet] Hide all console output, including errors
 * @param {boolean} ['include-modules'] Delete downloaded node modules as well
 * @param {boolean} [help] Show help
 */

import rimraf from 'rimraf';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface ICleanArgs {
    argv: {
        'verbose': boolean;
        'quiet': boolean;
        'help': boolean;
        'include-modules': boolean;
        '_': Array<string | number>;
        '$0': string;
    };
}

const { argv }: ICleanArgs = yargs(hideBin(process.argv))
    .scriptName('clean.ts')
    .usage('$0 <path> [<path> ...]')
    .options({
        'verbose': {
            alias: 'v',
            default: false,
            description: 'List files/globs as they are deleted',
            type: 'boolean',
        },
        'quiet': {
            alias: 'q',
            default: false,
            description: 'Hide all console output, including errors',
            type: 'boolean',
        },
        'include-modules': {
            alias: 'm',
            default: false,
            description: 'Delete downloaded node modules as well',
            type: 'boolean',
        },
    })
    .help()
    .alias('help', 'h')
    .default('help', false)
    .version(false);

const DEFAULT_DELETABLES: readonly string[] = [
    'packages/**/dist',
    'packages/**/lib',
    'packages/**/generated',
    '**.tsbuildinfo',
    '**/.tsbuildinfo',
    '.eslintcache',
];

const MODULE_DELETABLES: readonly string[] = [
    '**/node_modules',
    '**/.yarn/cache',
];

const enum MessageType {
    FINISHED,
    PROGRESS,
    ERROR,
}

const getDeletables = (): readonly string[] => {
    const baseDeletables: readonly string[] =
        argv._.length > 0
            ? argv._.map((arg) => String(arg))
            : DEFAULT_DELETABLES;
    const allDeletables: readonly string[] = argv['include-modules']
        ? baseDeletables.concat(MODULE_DELETABLES)
        : baseDeletables;
    return allDeletables;
};

const promiseRimraf = (filename: string): Promise<Error | null> =>
    new Promise((resolve, reject) =>
        // eslint-disable-next-line promise/prefer-await-to-callbacks
        rimraf(filename, (error: Error | null) => {
            if (error == null) {
                resolve(null);
            } else {
                reject(error);
            }
        })
    );

const printMessage = (message: string, messageType: MessageType): void => {
    switch (messageType) {
        case MessageType.FINISHED:
            if (!argv.quiet) {
                console.info(message);
            }
            break;
        case MessageType.PROGRESS:
            if (argv.verbose && !argv.quiet) {
                console.info(message);
            }
            break;
        case MessageType.ERROR:
            if (!argv.quiet) {
                console.error(message);
            }
            break;
        default:
            throw new Error('Message type not recongized.');
    }
};

const attemptDeletion = async (deletable: string): Promise<void> => {
    try {
        await promiseRimraf(deletable);
        if (argv.verbose && !argv.quiet) {
            printMessage(`Cleaned ${deletable}.`, MessageType.PROGRESS);
        }
    } catch (error: unknown) {
        if (!argv.quiet) {
            printMessage(
                `Error occurred while attempting to clean "${deletable}": ${String(
                    error
                )}`,
                MessageType.ERROR
            );
        }
    }
};

const clean = async (): Promise<void> => {
    if (argv.help) return;
    await Promise.allSettled(getDeletables().map(attemptDeletion));
    if (!argv.quiet) {
        printMessage('Finished cleaning.', MessageType.FINISHED);
    }
};

void clean();
