# language: pt

Funcionalidade: Gerenciamento de usuários pela API

  Cenário: Cadastrar um novo usuário com sucesso
    Dado que possuo dados válidos para um novo usuário
    Quando envio uma requisição para cadastrar o usuário
    Então a API deve retornar status 201
    E deve informar que o usuário foi cadastrado com sucesso
    E deve retornar o identificador do usuário criado
    E o usuário deve estar disponível para consulta