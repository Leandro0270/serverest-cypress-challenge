import {
  Given,
  When,
  Then,
  After,
} from "@badeball/cypress-cucumber-preprocessor";

import usersService from "../../services/users.service";
import { generateUser } from "../../utils/dataFactory";

let user;
let response;
let createdUserId;

Given("que possuo dados válidos para um novo usuário", () => {
  user = generateUser();
});

When("envio uma requisição para cadastrar o usuário", () => {
  usersService.create(user).then((res) => {
    response = res;
    createdUserId = res.body._id;

    cy.wrap(res).as("apiResponse");
  });
});

Then("deve informar que o usuário foi cadastrado com sucesso", () => {
  expect(response.body.message).to.eq("Cadastro realizado com sucesso");
});

Then("deve retornar o identificador do usuário criado", () => {
  expect(response.body._id).to.be.a("string").and.not.be.empty;
});

Then("o usuário deve estar disponível para consulta", () => {
  usersService.getById(createdUserId).then((res) => {
    expect(res.status).to.eq(200);

    expect(res.body).to.include({
      nome: user.nome,
      email: user.email,
      administrador: user.administrador,
    });

    expect(res.body._id).to.eq(createdUserId);
  });
});

After(() => {
  if (createdUserId) {
    usersService.delete(createdUserId);
  }

  user = undefined;
  response = undefined;
  createdUserId = undefined;
});
