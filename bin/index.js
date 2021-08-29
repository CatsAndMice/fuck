#!/usr/bin/env node
const { program } = require('commander')
const process = require('process')
const myPackage = require('../ackage.json')
const create = require('../src/create')
program.version(`@lihai-js/cli ${myPackage.version}`, '-v,-version', '获取版本')

program.command('create <project-name>')
  .description('创建一个文件')
  .action((name) => {
    create(name)
  })

program.on('--help', () => {
  console.log('\n cli <cammand> -h 查看详情\n')
})

const curCommand = process.argv.slice(3).join('')
!curCommand && program.help()

program.parse(process.argv)
