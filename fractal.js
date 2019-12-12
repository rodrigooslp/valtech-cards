'use strict'

const path = require('path')
const fractal = module.exports = require('@frctl/fractal').create()

fractal.set('project.title', 'valtech-cards')
fractal.components.set('path', path.join(__dirname, 'demo'))
fractal.docs.set('path', path.join(__dirname, 'docs'))
fractal.web.set('static.path', path.join(__dirname, 'demo/public'))
