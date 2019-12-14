import CardTitle from '@/components/elements/CardTitle.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardTitle', () => {
  const template = `
    <div id="app">
      <card-title>{{ text }}</card-title>
    </div>
  `
  const components = { CardTitle }
  const data = { text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the passed text value should be inside the component', () => {
    const text = 'VENICE'
    Cypress.vue.text = text

    cy
      .get('h2')
      .should('be.visible')
      .invoke('text')
      .should('eq', text)
  })

  it('the component should not be visible if no text is passed', () => {
    const text = ''
    Cypress.vue.text = text

    cy
      .get('h2')
      .should('not.be.visible')
  })
})
