const fs = require('fs')
const { kebabCase } = require('lodash')

class BuildHelper {
  constructor (name, path) {
    this.name = name
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

    const jsSource = `./dist/${this.name}.umd.min.js`
    const cssSource = `./dist/${this.name}.css`

    let dir = './demo'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += '/public'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    const cssPath = `${dir}/css`
    const jsPath = `${dir}/js`

    if (!fs.existsSync(cssPath)) fs.mkdirSync(cssPath)
    if (!fs.existsSync(jsPath)) fs.mkdirSync(jsPath)

    fs.copyFileSync(jsSource, `${jsPath}/${title}.js`)

    if (fs.existsSync(cssSource)) {
      fs.copyFileSync(cssSource, `${cssPath}/${title}.css`)
    }
  }
}

module.exports = BuildHelper
