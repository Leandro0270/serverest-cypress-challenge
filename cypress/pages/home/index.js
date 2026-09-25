import { ELEMENTS as el } from './elements'

class HomePage {
  validatePage() {
    cy.location('pathname').should('eq', '/home')
    cy.get(el.LOGOUT_BUTTON).should('be.visible')
  }
}

export default new HomePage()