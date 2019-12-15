import CardCityHeader from '@/components/blocks/CardCityHeader.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardCityHeader', () => {
  const template = `
    <div id="app">
      <card-city-header :title="title" :subtitle="subtitle" />
    </div>
  `
  const components = { CardCityHeader }
  const data = { title: null, subtitle: null }

  beforeEach(mountVue({ template, data, components }))

  it('the title passed should be rendered in the component', () => {
    const title = 'VENICE'

    Cypress.vue.title = title

    cy
      .get('.card__title')
      .should('exist')
      .should('be.visible')
      .invoke('text')
      .should('eq', title)
  })

  it('the subtitle passed should be rendered in the component', () => {
    const subtitle = 'ITALY'

    Cypress.vue.subtitle = subtitle

    cy
      .get('.card__subtitle')
      .should('exist')
      .should('be.visible')
      .invoke('text')
      .should('eq', subtitle)
  })
})
