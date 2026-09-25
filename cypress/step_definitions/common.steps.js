import {
  Given,
  After,
} from '@badeball/cypress-cucumber-preprocessor'

import usersService from '../services/users.service'
import { generateUser } from '../utils/dataFactory'

let createdUserId

Given('que possuo um usuário válido cadastrado', () => {
  const user = generateUser()

  usersService.create(user).then((response) => {
    expect(response.status).to.eq(201)
    expect(response.body).to.have.property('_id')

    createdUserId = response.body._id

    cy.wrap(user).as('user')
  })
})

After(() => {
  if (createdUserId) {
    usersService.delete(createdUserId)
    createdUserId = undefined
  }
})