const rimraf = require('rimraf')
const { spawn } = require('child_process')
const components = require('./components.json')
const children = []

components.forEach(({ name, path }) => {
  const child = spawn('node', ['./build/utils/build', name, path])

  child.stderr.setEncoding('utf8')

  child.stderr.on('data', (chunk) => {
    console.log(chunk)
  })

  child.on('close', (code) => {
    console.log(`-  Build finished ${code === 0 ? 'successfully.' : 'with errors.'}\n`)
  })

  console.log('-  Starting build task...\n')
  children.push(child)
})

process.on('SIGINT', () => process.exit())

process.on('exit', () => {
  console.log('-  Finishing', children.length, 'processes...')
  children.forEach(c => c.kill())
  console.log('-  Done!\n')
  console.log('-  Cleaning up the dist folder...')
  rimraf.sync('dist')
  console.log('-  Done!\n')
})
