const { error } = require('@vue/cli-shared-utils')
const Service = require('@vue/cli-service')
const BuildHelper = require('./BuildHelper')

function build (name, level, path) {
  const helper = new BuildHelper(name, level, path)
  const service = new Service(process.cwd())

  return service.run('build', helper.args, helper.rawArgv)
    .then(() => helper.moveFiles())
    .catch(err => {
      error(err)
      process.exit(1)
    })
}

const args = process.argv.slice(2)
const [ name, level, path ] = args

build(name, level, path)
