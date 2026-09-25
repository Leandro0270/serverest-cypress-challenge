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

Then('devo ser autenticado com sucesso', () => {
  homePage.validatePage()
})

After(() => {
  if (userId) {
    usersService.delete(userId)
  }
})