'use strict';
exports.__esModule = true;
require('reflect-metadata');
var AppServer_1 = require('./controller/AppServer');
var global_1 = require('@nyoomy/global');
console.assert(global_1.NODE_ENV != null);
new AppServer_1['default']().start(global_1.PORT)['catch'](console.log);
