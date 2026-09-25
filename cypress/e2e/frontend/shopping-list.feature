# language: pt

Funcionalidade: Lista de compras

  Como usuário autenticado
  Quero adicionar produtos à lista de compras
  Para consultar posteriormente os produtos de interesse

  Cenário: Adicionar produto à lista de compras
    Dado que possuo um usuário válido cadastrado
    E estou autenticado na aplicação
    Quando adiciono um produto à lista de compras
    Então o produto deve ser exibido na minha lista de compras
