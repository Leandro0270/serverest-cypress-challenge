export function generateUser({ admin = false } = {}) {
  const timestamp = Date.now()
  const random = Math.floor(Math.random() * 10000)

  return {
    nome: `QA Automation ${timestamp}`,
    email: `qa.${timestamp}.${random}@teste.com`,
    password: 'Teste@123',
    administrador: admin ? 'true' : 'false',
  }
}
