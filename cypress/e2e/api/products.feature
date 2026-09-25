# language: pt

Funcionalidade: Gerenciamento de produtos pela API

  Cenário: Cadastrar um novo produto como administrador
    Dado que possuo um usuário administrador autenticado
    E possuo dados válidos para um novo produto
    Quando envio uma requisição para cadastrar o produto
    Então a API deve retornar status 201
    E deve informar que o produto foi cadastrado com sucesso
    E deve retornar o identificador do produto criado
    E o produto deve estar disponível para consulta