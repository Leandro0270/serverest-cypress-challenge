import {
  Given,
  When,
  Then,
  After,
} from "@badeball/cypress-cucumber-preprocessor";

import usersService from "../../services/users.service";
import authService from "../../services/auth.service";
import productsService from "../../services/products.service";
import {
  generateUser,
  generateProduct,
} from "../../utils/dataFactory";

let adminUserId;
let token;
let product;
let productId;
let response;

Given("que possuo um usuário administrador autenticado", () => {
  const adminUser = generateUser({ admin: true });

  usersService.create(adminUser).then((userResponse) => {
    expect(userResponse.status).to.eq(201);
    expect(userResponse.body).to.have.property("_id");

    adminUserId = userResponse.body._id;

    authService
      .login({
        email: adminUser.email,
        password: adminUser.password,
      })
      .then((loginResponse) => {
        expect(loginResponse.status).to.eq(200);
        expect(loginResponse.body).to.have.property("authorization");

        token = loginResponse.body.authorization;
      });
  });
});

Given("possuo dados válidos para um novo produto", () => {
  product = generateProduct();
});

When("envio uma requisição para cadastrar o produto", () => {
  productsService.create(product, token).then((res) => {
    response = res;
    productId = res.body._id;

    cy.wrap(res).as("apiResponse");
  });
});

Then("deve informar que o produto foi cadastrado com sucesso", () => {
  expect(response.body.message).to.eq("Cadastro realizado com sucesso");
});

Then("deve retornar o identificador do produto criado", () => {
  expect(response.body._id).to.be.a("string").and.not.be.empty;
});

Then("o produto deve estar disponível para consulta", () => {
  productsService.getById(productId).then((res) => {
    expect(res.status).to.eq(200);

    expect(res.body).to.include({
      nome: product.nome,
      preco: product.preco,
      descricao: product.descricao,
      quantidade: product.quantidade,
    });

    expect(res.body._id).to.eq(productId);
  });
});

After(() => {
  if (productId && token) {
    productsService.delete(productId, token);
  }

  if (adminUserId) {
    usersService.delete(adminUserId);
  }

  adminUserId = undefined;
  token = undefined;
  product = undefined;
  productId = undefined;
  response = undefined;
});