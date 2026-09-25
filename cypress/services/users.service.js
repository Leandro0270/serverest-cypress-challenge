class UsersService {
  create(user) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: user,
    })
  }

  delete(id) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}/usuarios/${id}`,
      failOnStatusCode: false,
    })
  }
}

export default new UsersService()
