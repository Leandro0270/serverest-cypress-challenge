import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor'

import loginPage from '../../pages/login'
import homePage from '../../pages/home'

Given('acesso a página de login', () => {
  loginPage.visit()
})

When('informo minhas credenciais válidas', () => {
  cy.get('@user').then((user) => {
    loginPage.fillEmail(user.email)
    loginPage.fillPassword(user.password)
  })
})

When('informo credenciais inválidas', () => {
  loginPage.fillEmail(`invalid.${Date.now()}@teste.com`)
  loginPage.fillPassword('SenhaInvalida@123')
})

When('confirmo o login', () => {
  loginPage.clickLogin()
})

Then('devo ser autenticado com sucesso', () => {
  homePage.validatePage()
})

Then('devo visualizar uma mensagem de credenciais inválidas', () => {
  loginPage.validateErrorMessage('Email e/ou senha inválidos')
})

Then('devo permanecer na página de login', () => {
  loginPage.validateLoginPage()
})