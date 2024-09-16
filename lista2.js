const prompt = require('prompt-sync')()

//Exercício 1:

// const carro = {
//   marca: prompt('Digite a marca do carro: '),
//   modelo: prompt('Digite o modelo do carro: '),
//   ano: prompt('Digite o ano do carro: '),
//   cor: prompt('Digite a cor do carro: '),
// }

// for (let propriedade in carro) {
//   console.log(`${propriedade}: ${carro[propriedade]}`)
// }

//Exercício 2:

// const livro = {
//   titulo: 'Dom Casmurro',
//   autor: 'Machado de Assis',
//   anoPublicacao: 1899,
//   genero: 'Roamance',
// }

// let temEditora = false
// for (let propriedade in livro) {
//   if (propriedade === 'editora') {
//     temEditora = true
//   }
// }
// if (!temEditora) {
//   livro.editora = 'Livraria Garnier'
// }
// for (let propriedade in livro) {
//   console.log(`${propriedade}: ${livro[propriedade]}`)
// }


//Exercício 3:

// const produto = {
//   nome: "Laptop",
//   preco: 3500,
//   garantia: 24,
//   estoque: 50,
//   peso: 2.5,
//   desconto: 10
// }

// const valorMinimo = prompt('Acima de qual valor deseja filtrar? ')

// let filtro = {}

// for (let propriedade in produto) {
//   if (typeof produto[propriedade] === 'number' && produto[propriedade] > valorMinimo) {
//     filtro[propriedade] = produto[propriedade]
//   }
// }

// console.log(filtro)


//Exercício 4:

// const pessoas = [
//   {nome: 'Jéssica', idade: 28, cidade: 'São Paulo'},
//   {nome: 'Mariane', idade: 31, cidade: 'Santos'},
//   {nome: 'Marcos', idade: 19, cidade: 'Campinas'},
//   {nome: 'Arthur', idade: 14, cidade: 'Indaiatuba'},
//   {nome: 'Débora', idade: 34, cidade: 'Paulínia'}
// ]

// for (let pessoa of pessoas) {
//   console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
// }


//Exercício 5:

// const alunos = [
//   {nome: 'Camila', nota1: 5, nota2: 7},
//   {nome: 'Maria', nota1: 9, nota2: 8},
//   {nome: 'Rafael', nota1: 6, nota2: 7},
//   {nome: 'Amanda', nota1: 7, nota2: 7},
//   {nome: 'Fabiano', nota1: 5, nota2: 9}
// ]

// for (let aluno of alunos) {
//   let media = (aluno.nota1 + aluno.nota2) / 2
//   console.log(`O aluno (a) ${aluno.nome} ficou com média ${media}.`)
// }

//Exercício 6:

// const funcionarios = [
//   {nome: 'Alice', cargo: 'Gerente de Vendas', salario: 8000},
//   {nome: 'Bruno', cargo: 'Contador', salario: 4500},
//   {nome: 'Jéssica', cargo: 'Desenvolvedor', salario: 6000},
//   {nome: 'Diego', cargo: 'Almoxarife', salario: 2500}
// ]

// const filtro = prompt('Acima de qual valor de salário deseja filtrar? ')

// for (let funcionario of funcionarios) {
//   if (funcionario.salario > filtro) {
//     console.log(`O (a) funcionário (a) ${funcionario.nome}, com cargo de ${funcionario.cargo}, recebe salário de R$${funcionario.salario}`)
//   }
// }


//Exercício 7:

// const produtos = [
//   {nome: "Celular", preco: 3000, desconto: 0.1},
//   {nome: "Notebook", preco: 5000, desconto: 0.15},
//   {nome: "Tablet", preco: 1500, desconto: 0.2},
//   {nome: "Fone", preco: 300, desconto: 0.05}
// ]

// produtos.forEach (produto => {
//   const desconto = produto.preco * 0.1
//   produto.preco -= desconto
//   console.log(`Produto: ${produto.nome}, Novo Preço: R$ ${produto.preco.toFixed(2)}`)
// })


//Exercício 8:

// const filmes = [
//   {titulo: 'A Origem', diretor: 'Christopher Nolan', ano: 2010},
//   {titulo: 'Interstellar', diretor: 'Christopher Nolan', ano: 2014},
//   {titulo: 'Matrix', diretor: 'Lana e Lilly Wachowski', ano: 1999},
//   {titulo: 'O Senhor dos Anéis: A Sociedade do Anel', diretor: 'Peter Jackson', ano: 2001}
// ]

// const titulos = []

// filmes.forEach(filme => {
//   titulos.push(filme.titulo)
// })

// console.log(titulos)


//Exercício 9:

// const clientes = [
//   {nome: 'Jéssica', idade: 28, cidade: 'São Paulo'},
//   {nome: 'Mariane', idade: 31, cidade: 'Santos'},
//   {nome: 'Marcos', idade: 39, cidade: 'Campinas'},
//   {nome: 'Arthur', idade: 14, cidade: 'Indaiatuba'},
//   {nome: 'Débora', idade: 34, cidade: 'Paulínia'}
// ]

// let trinta = 0

// clientes.forEach(cliente => {
//   if (cliente.idade > 30) {
//     trinta++
//   }
// })

// console.log(`Temos ${trinta} clientes com 30 anos ou mais.`)


//Exercício 10:

// const vendas = [
//   {nome: "Celular", preco: 3000, quantidade: 6},
//   {nome: "Notebook", preco: 5000, quantidade: 4},
//   {nome: "Tablet", preco: 1500, quantidade: 2},
//   {nome: "Fone", preco: 300, quantidade: 15}
// ]

// let valorTotal = 0

// vendas.forEach(venda => {
//   valorTotal += venda.preco * venda.quantidade
// })

// console.log(`Valor total das vendas foi de R$ ${valorTotal.toFixed(2)}.`)


//Exercício 11:

// const pedidos = [
//   {cliente: 'Jéssica', produto: 'Notebook', quantidade: 2},
//   {cliente: 'Arthur', produto: 'Celular', quantidade: 5},
//   {cliente: 'Pedro', produto: 'Fone', quantidade: 1},
//   {cliente: 'Jéssica', produto: 'Tablet', quantidade: 3},
//   {cliente: 'Arthur', produto: 'Fone', quantidade: 3},
//   {cliente: 'Pedro', produto: 'Notebook', quantidade: 1},
//   {cliente: 'Jéssica', produto: 'Fone', quantidade: 2},
//   {cliente: 'Pedro', produto: 'Celular', quantidade: 3}
// ]

// const totalCliente = {}

// pedidos.forEach(pedido => {
//   if (totalCliente[pedido.cliente]) {
//     totalCliente[pedido.cliente] += pedido.quantidade
//   } else {
  
//     totalCliente[pedido.cliente] = pedido.quantidade
//   }
// })

// console.log(totalCliente)


//Exercício 12:

// const estoque = [
//   {produto: 'Notebook', quantidade: 5, minimo: 10},
//   {produto: 'Celular', quantidade: 12, minimo: 8},
//   {produto: 'Tablet', quantidade: 3, minimo: 7},
//   {produto: 'Fone', quantidade: 15, minimo: 10}
// ]

// estoque.forEach(item => {
//   if (item.quantidade < item.minimo) {
//     item.quantidade *= 2
//   }
// })

// console.log(estoque)

//Exercício 13:

// const carrinho = {
//   itens: [
//     { nome: 'Notebook', quantidade: 1, valor: 3000 },
//     { nome: 'Celular', quantidade: 2, valor: 1000 },
//     { nome: 'Tablet', quantidade: 3, valor: 1500 },
//     { nome: 'Fone', quantidade: 5, valor: 200 }
//   ]
// }

// let valorTotal = 0

// carrinho.itens.forEach(item => {
//   valorTotal += item.quantidade * item.valor
// })

// console.log(`Valor total do carrinho é R$ ${valorTotal.toFixed(2)}.`)

//Exercício 14:

// const empresa = {
//   departamentos: [
//     {
//       nome: 'Recursos Humanos',
//       funcionarios: [
//         {nome: 'Jessica', cargo: 'Gerente de RH'},
//         {nome: 'Arthur', cargo: 'Assistente de RH'}
//       ]
//     },
//     {
//       nome: 'TI',
//       funcionarios: [
//         {nome: 'Débora', cargo: 'Desenvolvedora'},
//         {nome: 'Mariane', cargo: 'Analista de Sistemas'}
//       ]
//     },
//     {
//       nome: 'Marketing',
//       funcionarios: [
//         {nome: 'Pedro', cargo: 'Coordenador de Marketing'},
//         {nome: 'Marcos', cargo: 'Analista de Marketing'}
//       ]
//     }
//   ]
// }
// for (let i in empresa.departamentos) {
//   const departamento = empresa.departamentos[i]
//   console.log(`Departamento: ${departamento.nome}`)
  
//   for (let funcionario of departamento.funcionarios) {
//     console.log(`  Funcionário: ${funcionario.nome} - Cargo: ${funcionario.cargo}`)
//   }
// }

//Exercício 15:

// const transacoes = [
//   {tipo: 'entrada', valor: 500},
//   {tipo: 'saida', valor: 200},
//   {tipo: 'entrada', valor: 150},
//   {tipo: 'saida', valor: 50},
//   {tipo: 'entrada', valor: 300}
// ]

// let saldo = 0

// transacoes.forEach(transacao => {
//   if (transacao.tipo === 'entrada') {
//     saldo += transacao.valor
//   } else if (transacao.tipo === 'saida') {
//     saldo -= transacao.valor
//   }
// })

// console.log(`Saldo final: R$ ${saldo.toFixed(2)}`)