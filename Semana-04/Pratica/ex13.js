// 13 - [REFATORAÇÃO] Em uma empresa de tecnologia a área de Recursos
// Humanos precisava organizar algumas informações a respeito dos funcionários.
// Para que isso fosse possível, ele precisava criar um programa que entregasse a
// lista de funcionalidades abaixo.
// Tendo como entrada um array de objetos crie funções que realizam as seguintes
// operações:
// ● Ordena o Array em ordem crescente por idade;
// ● Ordena o Array em ordem decrescente por idade;
// ● Ordena o Array em ordem crescente por salário;
// ● Ordena o Array em ordem decrescente por salário;
// ● Ordena o Array em ordem crescente por senioridade;
// ● Ordena o Array em ordem decrescente por senioridade;
// Exemplo de Entrada:
const employees = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

const sortAge = (employees, type) => {
  if (type === "cres") {
    const cres = employees.sort((a, b) => a.idade - b.idade)
    console.log(cres)
  } else if (type === "decr") {
    const decr = employees.sort((a, b) => b.idade - a.idade)
    console.log(decr)
  }
}
sortAge(employees, "cres")

const sortSal = (employees, type) => {
  if (type === "cres") {
    const cres = employees.sort((a, b) => a.salario - b.salario)
    console.log(cres)
  } else if (type === "decr") {
    const decr = employees.sort((a, b) => b.salario - a.salario)
    console.log(decr)
  }
}

sortSal(employees, "cres")

const sortSen = (employees, type) => {
  const level = {
    estagio: 0,
    junior: 1,
    pleno: 2,
    senior: 3,
  }

  if (type === "cres") {
    const cres = employees.sort(
      (a, b) => level[a.senioridade] - level[b.senioridade]
    )
    console.log(cres)
  } else if (type === "decr") {
    const decr = employees.sort(
      (a, b) => level[b.senioridade] - level[a.senioridade]
    )
    console.log(decr)
  }
}

sortSen(employees, "cres")
