const fractal = require('./fractal')
const builder = fractal.web.builder()

builder.build({ config: { dest: 'valtech-cards-demo' } }).then(() => {
  console.log('Fractal static HTML build complete!')
})
