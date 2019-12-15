import CardBackground from '@/components/elements/CardBackground.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardBackground', () => {
  const template = `
    <div id="app">
      <card-background :image="image" />
    </div>
  `
  const components = { CardBackground }
  const data = { image: null }

  beforeEach(mountVue({ template, data, components }))

  it('default should be a valid image attribute', () => {
    Cypress.vue.image = 'default'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })

  it('venice should be a valid image attribute', () => {
    Cypress.vue.image = 'venice'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'venice')
  })

  it('berlin should be a valid image attribute', () => {
    Cypress.vue.image = 'berlin'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'berlin')
  })

  it('barcelona should be a valid image attribute', () => {
    Cypress.vue.image = 'barcelona'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'barcelona')
  })

  it('paris should be a valid image attribute', () => {
    Cypress.vue.image = 'paris'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'paris')
  })

  it('amsterdam should be a valid image attribute', () => {
    Cypress.vue.image = 'amsterdam'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'amsterdam')
  })

  it('london should be a valid image attribute', () => {
    Cypress.vue.image = 'london'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'london')
  })

  it('null image value should fallback to default', () => {
    Cypress.vue.image = null

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })

  it('undefined image value should fallback to default', () => {
    Cypress.vue.image = undefined

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })

  it('empty image value should fallback to default', () => {
    Cypress.vue.image = ''

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })

  it('invalid image value should fallback to default', () => {
    Cypress.vue.image = 'somewhere'

    cy
      .get('img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })
})
