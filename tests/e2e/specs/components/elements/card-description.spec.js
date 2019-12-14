import CardDescription from '@/components/elements/CardDescription.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardDescription', () => {
  const template = `
    <div id="app">
      <card-description>{{ text }}</card-description>
    </div>
  `
  const components = { CardDescription }
  const data = { text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the passed text value should be inside the component', () => {
    const text = `
      Venice, the capital of northern Italy's Veneto region,
      is built on more than 100 small islands in a lagoon in the Adriatic Sea.
      It has no roads, just canals.
    `
    Cypress.vue.text = text

    cy
      .get('h4')
      .should('be.visible')
      .invoke('text')
      .should('eq', text)
  })

  it('the component should not be visible if no text is passed', () => {
    const text = ''
    Cypress.vue.text = text

    cy
      .get('h4')
      .should('not.be.visible')
  })
})
