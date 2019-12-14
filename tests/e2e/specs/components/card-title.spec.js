import CardTitle from '@/components/elements/CardTitle.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardTitle', () => {
  const template = `
    <div id="app" style="background: gray;">
      <card-title>{{ text }}</card-title>
    </div>
  `
  const components = { CardTitle }
  const data = { text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the passed text value should be inside the component', () => {
    Cypress.vue.text = 'FRONT-END'

    cy
      .get('h2')
      .invoke('text')
      .should('eq', 'FRONT-END')
  })

  it('the component should not be visible if no text is passed', () => {
    Cypress.vue.text = ''

    cy
      .get('h2')
      .should('not.be.visible')
  })
})
