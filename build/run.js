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
    console.log(`child process exited with code ${code}`)
  })

  console.log('child process started')
  children.push(child)
})

process.on('SIGINT', () => process.exit())

process.on('exit', () => {
  console.log('finishing', children.length, 'child processes...')
  children.forEach(c => c.kill())
  console.log('done')
  console.log('cleaning up the dist folder...')
  rimraf('./dist', () => console.log('done!'))
})
