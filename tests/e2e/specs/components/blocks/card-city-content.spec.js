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

  it('the overlay should be rendered and visible', () => {
    cy
      .get('.card__overlay')
      .should('exist')
      .should('be.visible')
  })

  it('the title passed should be rendered and visible', () => {
    const title = 'VENICE'

    Cypress.vue.title = title

    cy
      .get('.card__title')
      .should('exist')
      .should('be.visible')
      .invoke('text')
      .should('eq', title)
  })

  it('the subtitle passed should be rendered and visible', () => {
    const subtitle = 'ITALY'

    Cypress.vue.subtitle = subtitle

    cy
      .get('.card__subtitle')
      .should('exist')
      .should('be.visible')
      .invoke('text')
      .should('eq', subtitle)
  })

  it('the text passed should be rendered and not visible', () => {
    const text = `
      Venice, the capital of northern Italy's Veneto region,
      is built on more than 100 small islands in a lagoon in the Adriatic Sea.
      It has no roads, just canals.
    `

    Cypress.vue.text = text

    cy
      .get('.card__description')
      .should('exist')
      .should('not.be.visible')
      .invoke('text')
      .should('contain', text)
  })

  it('the button should be rendered and not visible', () => {
    cy
      .get('.card__button')
      .should('not.be.visible')
  })

  it('the description should become visible/invisible on mouseenter/mouseleave', () => {
    cy
      .get('.card__city-content')
      .trigger('mouseenter')

    cy
      .get('.card__description')
      .should('be.visible')

    cy
      .get('.card__city-content')
      .trigger('mouseleave')

    cy
      .get('.card__description')
      .should('not.be.visible')
  })

  it('the button should become visible/invisible on mouseenter/mouseleave', () => {
    cy
      .get('.card__city-content')
      .trigger('mouseenter')

    cy
      .get('.card__button')
      .should('be.visible')

    cy
      .get('.card__city-content')
      .trigger('mouseleave')

    cy
      .get('.card__button')
      .should('not.be.visible')
  })

  it('the header should move on mouseenter/mouseleave', () => {
    let position

    cy
      .get('.card__city-header')
      .then($header => {
        position = $header.position()
      })

    cy
      .get('.card__city-content')
      .trigger('mouseenter')

    cy.wait(1000)

    cy
      .get('.card__city-header')
      .then($header => {
        expect($header.position()).to.not.deep.equal(position)
      })

    cy
      .get('.card__city-content')
      .trigger('mouseleave')

    cy.wait(1000)

    cy
      .get('.card__city-header')
      .then($header => {
        expect($header.position()).to.deep.equal(position)
      })
  })
})
