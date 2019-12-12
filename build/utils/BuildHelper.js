const fs = require('fs')

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
    const root = './demo'
    const js = `./dist/${this.name}.umd.js`
    const css = `./dist/${this.name}.css`

    if (!fs.existsSync(root)) {
      fs.mkdirSync(root)
    }

    if (!fs.existsSync(`${root}/${this.name}`)) {
      fs.mkdirSync(`${root}/${this.name}`)
    }

    if (!fs.existsSync(`${root}/${this.name}/component`)) {
      fs.mkdirSync(`${root}/${this.name}/component`)
    }

    fs.copyFileSync(js, `./demo/${this.name}/component/${this.name}.js`)

    if (fs.existsSync(css)) {
      fs.copyFileSync(css, `./demo/${this.name}/component/${this.name}.css`)
    }
  }
}

module.exports = BuildHelper
