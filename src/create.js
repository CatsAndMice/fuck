const fs = require('fs')
const colors = require('colors')
const path = require('path')

function createMkdir (drirPath) {
  try {
    fs.mkdirSync(drirPath)
  } catch (e) {
    console.log(e)
    console.log(colors.red('error:') + `${drirPath}创建失败，请重新创建!`)
  }
}

module.exports = function create (dirName) {
  const drirPath = path.resolve(process.cwd(), dirName)
  try {
    fs.accessSync(drirPath, fs.constants.R_OK)
    console.log(colors.red('error:') + `${dirName}已存在,请更改文件名!`)
    process.exit(1)
  } catch {
    createMkdir(drirPath)
  }
}
