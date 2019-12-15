import CardCityContent from '@/components/blocks/CardCityContent.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardCityContent', () => {
  const template = `
    <div id="app">
      <card-city-content :title="title" :subtitle="subtitle" :text="text" />
    </div>
  `
  const components = { CardCityContent }
  const data = { title: null, subtitle: null, text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the title passed should be rendered in the component', () => {
    const title = 'VENICE'

    Cypress.vue.title = title

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', title)
  })

  it('the subtitle passed should be rendered in the component', () => {
    const subtitle = 'ITALY'

    Cypress.vue.subtitle = subtitle

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', subtitle)
  })

  it('the text passed should be rendered in the component', () => {
    const text = `
      Venice, the capital of northern Italy's Veneto region,
      is built on more than 100 small islands in a lagoon in the Adriatic Sea.
      It has no roads, just canals.
    `

    Cypress.vue.text = text

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contain', text)
  })

  it('the overlay should be rendered', () => {
    cy
      .get('.card__overlay')
      .should('exist')
  })

  it('the button should be rendered', () => {
    cy
      .get('.card__button')
      .should('exist')
  })
})
