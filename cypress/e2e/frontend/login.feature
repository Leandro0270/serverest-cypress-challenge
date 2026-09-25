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

  Cenário: Tentar realizar login com credenciais inválidas
    Dado acesso a página de login 
    Quando informo credenciais inválidas
    E confirmo o login
    Então devo visualizar uma mensagem de credenciais inválidas
    E devo permanecer na página de login