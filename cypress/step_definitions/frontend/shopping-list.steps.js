import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor'

import loginPage from '../../pages/login'
import homePage from '../../pages/home'
import shoppingListPage from '../../pages/shopping-list'

Given('estou autenticado na aplicação', () => {
  cy.get('@user').then((user) => {
    loginPage.visit()
    loginPage.login(user.email, user.password)
  })

  homePage.validatePage()
})

When('adiciono um produto à lista de compras', () => {
  homePage.addFirstProductToShoppingList()
})

Then('o produto deve ser exibido na minha lista de compras', () => {
  shoppingListPage.validatePage()

  cy.get('@selectedProductName').then((productName) => {
    shoppingListPage.validateProductIsListed(productName)
  })
})