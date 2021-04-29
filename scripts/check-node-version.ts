#!/usr/bin/env ts-node

import pleaseUpgradeNode from 'please-upgrade-node';
import packageJson from '../package.json';

pleaseUpgradeNode(packageJson);

console.info('Node version is compatable.');
