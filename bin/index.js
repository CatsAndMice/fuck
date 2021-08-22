#!/usr/bin/env node
const { program } = require('commander'),
    process = require('process'),
    package = require('../package.json');
program.version(package.version);
program.parse(process.argv)
