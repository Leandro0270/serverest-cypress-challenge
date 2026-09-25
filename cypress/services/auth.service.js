class AuthService {
  login(credentials) {
    return cy.env(["apiUrl"]).then(({ apiUrl }) => {
      return cy.request({
        method: "POST",
        url: `${apiUrl}/login`,
        body: credentials,
        failOnStatusCode: false,
      });
    });
  }
}

export default new AuthService();
