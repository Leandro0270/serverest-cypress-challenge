class ProductsService {
  create(product, token) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "POST",
        url: `${apiUrl}/produtos`,
        headers: {
          authorization: token,
        },
        body: product,
        failOnStatusCode: false,
      });
    });
  }

  getById(id) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "GET",
        url: `${apiUrl}/produtos/${id}`,
        failOnStatusCode: false,
      });
    });
  }

  delete(id, token) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "DELETE",
        url: `${apiUrl}/produtos/${id}`,
        headers: {
          authorization: token,
        },
        failOnStatusCode: false,
      });
    });
  }
}

export default new ProductsService();
