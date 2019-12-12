const fs = require('fs')

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
    const js = `./dist/${this.name}.umd.js`
    const css = `./dist/${this.name}.css`

    let dir = './demo'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += `/${this.level}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += `/${this.name}`
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    dir += '/component'
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    fs.copyFileSync(js, `${dir}/${this.name}.js`)

    if (fs.existsSync(css)) {
      fs.copyFileSync(css, `${dir}/${this.name}.css`)
    }
  }
}

module.exports = BuildHelper
