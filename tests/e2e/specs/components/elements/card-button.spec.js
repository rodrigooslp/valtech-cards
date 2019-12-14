import CardButton from '@/components/elements/CardButton.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardButton', () => {
  const template = `
    <div id="app">
      <card-button>{{ text }}</card-button>
    </div>
  `
  const components = { CardButton }
  const data = { text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the passed text value should be inside the component', () => {
    const text = 'Explore More'
    Cypress.vue.text = text

    cy
      .get('button')
      .should('be.visible')
      .invoke('text')
      .should('eq', text)
  })

  it('the component should still be visible if no text is passed', () => {
    const text = ''
    Cypress.vue.text = text

    cy
      .get('button')
      .should('be.visible')
      .invoke('text')
      .should('eq', text)
  })
})
