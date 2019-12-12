const fractal = require('./fractal')
const server = fractal.web.server()

server.start().then(() => {
  console.log(`Fractal server is now running at ${server.url}`)
})
