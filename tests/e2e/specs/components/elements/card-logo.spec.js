import CardLogo from '@/components/elements/CardLogo.vue'
const mountVue = require('cypress-vue-unit-test')

describe('CardLogo', () => {
  const template = `
    <div id="app">
      <card-logo />
    </div>
  `
  const components = { CardLogo }

  beforeEach(mountVue({ template, components }))

  it('the logo should be visible', () => {
    cy
      .get('img')
      .should('be.visible')
  })

  it('the logo source should link to the correct file', () => {
    cy
      .get('img')
      .invoke('attr', 'src')
      .should('include', 'logo.svg')
  })
})
