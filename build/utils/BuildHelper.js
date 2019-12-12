const fs = require('fs')
const { kebabCase } = require('lodash')

class BuildHelper {
  constructor (name, level, path) {
    this.name = name
    this.level = level
    this.path = path

    this.args = this.createArgs()
    this.rawArgv = this.createArgsRawArgv()
  }

  createArgs () {
    const args = require('./data/args.json')
    args.name = this.name
    args._.push(this.path)
    return args
  }

  createArgsRawArgv (name, path) {
    const rawArgv = require('./data/rawArgv.json')
    rawArgv.push(name)
    rawArgv.push(path)
    return rawArgv
  }

  moveFiles () {
    const title = kebabCase(this.name)

    const js = `./dist/${this.name}.umd.js`
    const css = `./dist/${this.name}.css`

    let dir = './demo'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += `/${this.level}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += `/${title}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += '/component'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    fs.copyFileSync(js, `${dir}/${title}.js`)

    if (fs.existsSync(css)) {
      fs.copyFileSync(css, `${dir}/${title}.css`)
    }
  }
}

module.exports = BuildHelper
