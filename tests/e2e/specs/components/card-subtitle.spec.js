import CardSubtitle from '@/components/elements/CardSubtitle.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardSubtitle', () => {
  const template = `
    <div id="app">
      <card-subtitle>{{ text }}</card-subtitle>
    </div>
  `
  const components = { CardSubtitle }
  const data = { text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the passed text value should be inside the component', () => {
    const text = 'ITALY'
    Cypress.vue.text = text

    cy
      .get('h1')
      .should('be.visible')
      .invoke('text')
      .should('eq', text)
  })

  it('the component should not be visible if no text is passed', () => {
    const text = ''
    Cypress.vue.text = text

    cy
      .get('h1')
      .should('not.be.visible')
  })
})
