# ServeRest Cypress Challenge
[![CI](https://github.com/SEU_USUARIO/serverest-cypress-challenge/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/serverest-cypress-challenge/actions/workflows/ci.yml)

Automação de testes E2E e API desenvolvida com Cypress, JavaScript e Cucumber para o desafio técnico de QA.

## Tecnologias

- Cypress
- JavaScript
- Cucumber / Gherkin
- ESLint
- pnpm

## Arquitetura

### Frontend

- Feature
- Step Definitions
- Page Objects
- Elements

### API

- Feature
- Step Definitions
- Services

## Cenários automatizados

### Frontend

1. Login com credenciais válidas
2. Login com credenciais inválidas
3. Adicionar produto à lista de compras

### API

1. Cadastro de usuário
2. Login com credenciais inválidas
3. Cadastro de produto autenticado como administrador

## Pré-requisitos

- Node.js
- pnpm

## Instalação

```bash
pnpm install
```

## Execução

```bash
# Abrir Cypress
pnpm cy:open

# Executar todos os testes
pnpm test

# Executar apenas frontend
pnpm test:frontend

# Executar apenas API
pnpm test:api
```

## Qualidade de código

```bash
pnpm lint
```

## Estratégia de testes

- Os dados utilizados nos testes são gerados dinamicamente para evitar dependência de massa fixa no ambiente compartilhado do ServeRest.
- As pré-condições que não fazem parte do comportamento testado são preparadas por API, reduzindo o acoplamento entre cenários.
- Após os testes, os dados criados são removidos sempre que aplicável.

## Cenários adicionais identificados

Durante a análise da aplicação, também foram identificados como candidatos à automação:

- Cadastro de usuário pelo frontend
- Cadastro de administrador
- Validação de e-mail já cadastrado
- Logout
- Remoção de produto da lista de compras
- Validações de campos obrigatórios
- Tentativa de cadastro de produto por usuário não administrador

O escopo automatizado foi mantido nos 3 cenários de frontend e 3 cenários de API solicitados pelo desafio.
