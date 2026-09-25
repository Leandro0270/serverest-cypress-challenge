# language: pt

Funcionalidade: Login de usuário

  Como usuário cadastrado
  Quero realizar login na aplicação
  Para acessar as funcionalidades disponíveis

  Cenário: Realizar login com credenciais válidas
    Dado que possuo um usuário válido cadastrado
    E acesso a página de login
    Quando informo minhas credenciais válidas
    E confirmo o login
    Então devo ser autenticado com sucesso
