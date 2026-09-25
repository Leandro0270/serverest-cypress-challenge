import {
  Given,
  When,
  Then,
  After,
} from '@badeball/cypress-cucumber-preprocessor'

import loginPage from '../../pages/login'
import usersService from '../../services/users.service'
import { generateUser } from '../../utils/dataFactory'
import homePage from '../../pages/home'
let user
let userId

Given('que possuo um usuário válido cadastrado', () => {
  user = generateUser()

  usersService.create(user).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body).to.have.property('_id')

    userId = response.body._id
  })
})

Given('acesso a página de login', () => {
  loginPage.visit()
})

When('informo minhas credenciais válidas', () => {
  loginPage.fillEmail(user.email)
  loginPage.fillPassword(user.password)
})

When('confirmo o login', () => {
  loginPage.clickLogin()
})

When('informo credenciais inválidas', () => {
  loginPage.fillEmail(`invalid.${Date.now()}@teste.com`)
  loginPage.fillPassword('SenhaInvalida@123')
})

Then('devo visualizar uma mensagem de credenciais inválidas', () => {
  loginPage.validateErrorMessage('Email e/ou senha inválidos')
})

Then('devo permanecer na página de login', () => {
  loginPage.validateLoginPage()
})

Then('devo ser autenticado com sucesso', () => {
  homePage.validatePage()
})

After(() => {
  if (userId) {
    usersService.delete(userId)
  }

  user = undefined
  userId = undefined
})