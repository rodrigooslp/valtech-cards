import CardText from '@/components/elements/CardText.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardText', () => {
  const template = `
    <div id="app">
      <card-text>{{ text }}</card-text>
    </div>
  `
  const components = { CardText }
  const data = { text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the passed text value should be inside the component', () => {
    const text = 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
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
