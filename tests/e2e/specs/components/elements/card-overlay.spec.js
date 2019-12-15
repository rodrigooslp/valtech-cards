import CardOverlay from '@/components/elements/CardOverlay.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardOverlay', () => {
  const template = `
    <div id="app">
      <card-overlay />
    </div>
  `
  const components = { CardOverlay }

  beforeEach(mountVue({ template, components }))

  it('the overlay should be visible', () => {
    cy
      .get('.card__overlay')
      .should('exist')
  })
})
