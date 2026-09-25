import { ELEMENTS as el } from "./elements";

class LoginPage {
  visit() {
    cy.visit("/");
  }

  fillEmail(email) {
    cy.get(el.EMAIL_INPUT).clear().type(email);
  }

  fillPassword(password) {
    cy.get(el.PASSWORD_INPUT).clear().type(password);
  }

  clickLogin() {
    cy.get(el.LOGIN_BUTTON).click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }

  validateErrorMessage(message) {
    cy.contains(el.ERROR_ALERT, message).should("be.visible");
  }

  validateLoginPage() {
    cy.location("pathname").should("eq", "/login");
    cy.get(el.LOGIN_BUTTON).should("be.visible");
  }
}

export default new LoginPage();
