export function generateUser({ admin = false } = {}) {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);

  return {
    nome: `QA Automation ${timestamp}`,
    email: `qa.${timestamp}.${random}@teste.com`,
    password: "Teste@123",
    administrador: admin ? "true" : "false",
  };
}

export function generateProduct() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);

  return {
    nome: `Produto QA ${timestamp}`,
    preco: 150,
    descricao: `RandomProduct No. ${random}`,
    quantidade: 10,
  };
}