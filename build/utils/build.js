const { error } = require('@vue/cli-shared-utils')
const Service = require('@vue/cli-service')
const BuildHelper = require('./BuildHelper')

function build (name, path) {
  const helper = new BuildHelper(name, path)
  const service = new Service(process.cwd())

  return service.run('build', helper.args, helper.rawArgv)
    .then(() => helper.moveFiles())
    .catch(err => {
      error(err)
      process.exit(1)
    })
}

const args = process.argv.slice(2)
const [ name, path ] = args

build(name, path)
