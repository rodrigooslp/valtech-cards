import Card from '@/components/widgets/Card.vue'
const mountVue = require('cypress-vue-unit-test')

describe('Card', () => {
  const template = `
    <div id="app">
      <card :content="content" />
    </div>
  `
  const components = { Card }
  const data = { content: null }

  const info = {
    default: {
      title: 'FRONT-END',
      description: 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
    },
    venice: {
      title: 'ITALY',
      subtitle: 'VENICE',
      image: 'venice',
      description: 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
    },
    berlin: {
      title: 'GERMANY',
      subtitle: 'BERLIN',
      image: 'berlin',
      description: 'Berlin, Germany’s capital, dates to the 13th century. The city\'s known for its art scene and modern landmarks.'
    },
    barcelona: {
      title: 'SPAIN',
      subtitle: 'BARCELONA',
      image: 'barcelona',
      description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.'
    },
    paris: {
      title: 'FRANCE',
      subtitle: 'PARIS',
      image: 'paris',
      description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture.'
    },
    amsterdam: {
      title: 'NETHERLANDS',
      subtitle: 'AMSTERDAM',
      image: 'amsterdam',
      description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage and elaborate canal system.'
    },
    london: {
      title: 'UNITED KINGDOM',
      subtitle: 'LONDON',
      image: 'london',
      description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
    }
  }

  beforeEach(mountVue({ template, data, components }))

  it('the overlay should be rendered', () => {
    cy
      .get('.card__overlay')
      .should('exist')
  })

  // content: null

  it('content: null should have the expected background', () => {
    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })

  it('content: null should have the expected title', () => {
    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.default.title)
  })

  it('content: null should have the expected logo', () => {
    cy
      .get('.card__logo')
      .should('exist')
  })

  it('content: null should have the expected text', () => {
    cy
      .get('.card__text')
      .should('exist')
      .invoke('text')
      .should('eq', info.default.description)
  })

  it('content: null should not have a subtitle', () => {
    cy
      .get('.card__subtitle')
      .should('not.exist')
  })

  it('content: null should not have a description', () => {
    cy
      .get('.card__description')
      .should('not.exist')
  })

  it('content: null should not have a button', () => {
    cy
      .get('.card__button')
      .should('not.exist')
  })

  // content: default

  it('content: default should have the expected background', () => {
    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', 'default')
  })

  it('content: default should have the expected title', () => {
    const content = 'default'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.default.title)
  })

  it('content: default should have the expected logo', () => {
    const content = 'default'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('exist')
  })

  it('content: default should have the expected text', () => {
    const content = 'default'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('exist')
      .invoke('text')
      .should('eq', info.default.description)
  })

  it('content: default should not have a subtitle', () => {
    const content = 'default'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('not.exist')
  })

  it('content: default should not have a description', () => {
    const content = 'default'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('not.exist')
  })

  it('content: default should not have a button', () => {
    const content = 'default'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('not.exist')
  })

  // content: venice

  it('content: venice should have the expected background', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', info.venice.image)
  })

  it('content: venice should have the expected title', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.venice.title)
  })

  it('content: venice should not have a logo', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('not.exist')
  })

  it('content: venice should not have text', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('not.exist')
  })

  it('content: venice should have the expected subtitle', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', info.venice.subtitle)
  })

  it('content: venice should have the expected description', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contains', info.venice.description)
  })

  it('content: venice should have a button', () => {
    const content = 'venice'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('exist')
  })

  // content: berlin

  it('content: berlin should have the expected background', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', info.berlin.image)
  })

  it('content: berlin should have the expected title', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.berlin.title)
  })

  it('content: berlin should not have a logo', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('not.exist')
  })

  it('content: berlin should not have text', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('not.exist')
  })

  it('content: berlin should have the expected subtitle', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', info.berlin.subtitle)
  })

  it('content: berlin should have the expected description', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contains', info.berlin.description)
  })

  it('content: berlin should have a button', () => {
    const content = 'berlin'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('exist')
  })

  // content: barcelona

  it('content: barcelona should have the expected background', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', info.barcelona.image)
  })

  it('content: barcelona should have the expected title', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.barcelona.title)
  })

  it('content: barcelona should not have a logo', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('not.exist')
  })

  it('content: barcelona should not have text', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('not.exist')
  })

  it('content: barcelona should have the expected subtitle', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', info.barcelona.subtitle)
  })

  it('content: barcelona should have the expected description', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contains', info.barcelona.description)
  })

  it('content: barcelona should have a button', () => {
    const content = 'barcelona'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('exist')
  })

  // content: paris

  it('content: paris should have the expected background', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', info.paris.image)
  })

  it('content: paris should have the expected title', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.paris.title)
  })

  it('content: paris should not have a logo', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('not.exist')
  })

  it('content: paris should not have text', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('not.exist')
  })

  it('content: paris should have the expected subtitle', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', info.paris.subtitle)
  })

  it('content: paris should have the expected description', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contains', info.paris.description)
  })

  it('content: paris should have a button', () => {
    const content = 'paris'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('exist')
  })

  // content: amsterdam

  it('content: amsterdam should have the expected background', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', info.amsterdam.image)
  })

  it('content: amsterdam should have the expected title', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.amsterdam.title)
  })

  it('content: amsterdam should not have a logo', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('not.exist')
  })

  it('content: amsterdam should not have text', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('not.exist')
  })

  it('content: amsterdam should have the expected subtitle', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', info.amsterdam.subtitle)
  })

  it('content: amsterdam should have the expected description', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contains', info.amsterdam.description)
  })

  it('content: amsterdam should have a button', () => {
    const content = 'amsterdam'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('exist')
  })

  // content: london

  it('content: london should have the expected background', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__background img')
      .should('exist')
      .invoke('attr', 'src')
      .should('include', info.london.image)
  })

  it('content: london should have the expected title', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__title')
      .should('exist')
      .invoke('text')
      .should('eq', info.london.title)
  })

  it('content: london should not have a logo', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__logo')
      .should('not.exist')
  })

  it('content: london should not have text', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__text')
      .should('not.exist')
  })

  it('content: london should have the expected subtitle', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__subtitle')
      .should('exist')
      .invoke('text')
      .should('eq', info.london.subtitle)
  })

  it('content: london should have the expected description', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__description')
      .should('exist')
      .invoke('text')
      .should('contains', info.london.description)
  })

  it('content: london should have a button', () => {
    const content = 'london'
    Cypress.vue.content = content

    cy
      .get('.card__button')
      .should('exist')
  })
})
