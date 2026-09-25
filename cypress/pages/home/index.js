import { ELEMENTS as el } from "./elements";

class HomePage {
  validatePage() {
    cy.location("pathname").should("eq", "/home");
    cy.get(el.LOGOUT_BUTTON).should("be.visible");
  }

  addFirstProductToShoppingList() {
    cy.get(el.PRODUCT_CARD)
      .first()
      .within(() => {
        cy.get(el.PRODUCT_TITLE)
          .invoke("text")
          .then((text) => {
            cy.wrap(text.trim()).as("selectedProductName");
          });

        cy.get(el.ADD_TO_LIST_BUTTON).click();
      });
  }
}

export default new HomePage();
