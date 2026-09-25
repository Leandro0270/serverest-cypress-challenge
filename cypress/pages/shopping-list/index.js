import { ELEMENTS as el } from "./elements";

class ShoppingListPage {
  validatePage() {
    cy.location("pathname").should("eq", "/minhaListaDeProdutos");
  }

  validateProductIsListed(productName) {
    cy.get(el.PRODUCT_TITLE).should("contain.text", productName);
  }
}

export default new ShoppingListPage();
