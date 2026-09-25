# language: pt

Funcionalidade: Autenticação pela API

  Cenário: Tentar autenticar com credenciais inválidas
    Dado que possuo credenciais inválidas
    Quando envio uma requisição de login
    Então a API deve retornar status 401
    E deve informar que o email ou a senha são inválidos
