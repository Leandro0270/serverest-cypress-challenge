import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor'

import authService from '../../services/auth.service'

let credentials
let response

Given('que possuo credenciais inválidas', () => {
  credentials = {
    email: `invalid.${Date.now()}@teste.com`,
    password: 'SenhaInvalida@123',
  }
})

When('envio uma requisição de login', () => {
  authService.login(credentials).then((res) => {
    response = res
  })
})

Then('a API deve retornar status 401', () => {
  expect(response.status).to.eq(401)
})

Then('deve informar que o email ou a senha são inválidos', () => {
  expect(response.body.message).to.eq('Email e/ou senha inválidos')
})
