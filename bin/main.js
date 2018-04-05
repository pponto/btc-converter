#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var convertBTC = require('./ConvertBTC');

program.version(pkg.version).description('Convert Bitcoin to any currency defined.').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD').option('-A, --amount <amount>', 'Value in Bitcoin to be converted. (Default: 1').parse(process.argv);

convertBTC(program.currency, program.amount);