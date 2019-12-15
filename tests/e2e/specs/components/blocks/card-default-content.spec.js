import CardDefaultContent from '@/components/blocks/CardDefaultContent.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardDefaultContent', () => {
  const template = `
    <div id="app">
      <card-default-content :title="title" :text="text" />
    </div>
  `
  const components = { CardDefaultContent }
  const data = { title: null, text: null }

  beforeEach(mountVue({ template, data, components }))

  it('the title passed should be rendered in the component', () => {
    const title = 'VENICE'

    Cypress.vue.title = title

    cy
      .get('.card__title')
      .should('be.visible')
      .invoke('text')
      .should('eq', title)
  })

  it('the text passed should be rendered in the component', () => {
    const text = `
      Venice, the capital of northern Italy's Veneto region,
      is built on more than 100 small islands in a lagoon in the Adriatic Sea.
      It has no roads, just canals.
    `

    Cypress.vue.text = text

    cy
      .get('.card__text')
      .should('be.visible')
      .invoke('text')
      .should('contain', text)
  })
})
