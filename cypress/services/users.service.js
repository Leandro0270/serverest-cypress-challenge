class UsersService {
  create(user) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "POST",
        url: `${apiUrl}/usuarios`,
        body: user,
        failOnStatusCode: false,
      });
    });
  }

  getById(id) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "GET",
        url: `${apiUrl}/usuarios/${id}`,
        failOnStatusCode: false,
      });
    });
  }

  delete(id) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "DELETE",
        url: `${apiUrl}/usuarios/${id}`,
        failOnStatusCode: false,
      });
    });
  }
}

export default new UsersService();
