#!/usr/bin/env node
const { program } = require('commander'),
    process = require('process'),
    package = require('../package.json'),
    create = require('../src/create'),
    commands = ["create"]
program.version(`@lihai-js/cli ${package.version}`, '-v,-version', '获取版本');

program.command('create <project-name>')
    .description('创建一个文件')
    .action((name) => {
        create(name);
    })


program.on('--help', () => {
    console.log('\n cli <cammand> -h 查看详情\n');
});

let curCommand = process.argv.slice(3).join('');
curCommand ? null : program.help();
program.parse(process.argv);
