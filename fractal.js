'use strict'

const path = require('path')
const fractal = module.exports = require('@frctl/fractal').create()

fractal.set('project.title', 'valtech-cards')
fractal.components.set('path', path.join(__dirname, 'demo/components'))
fractal.docs.set('path', path.join(__dirname, 'demo/docs'))
fractal.web.set('static.path', path.join(__dirname, 'demo/public'))
fractal.web.set('builder.dest', path.join(__dirname, 'export'))
