// 12 - [REFATORAÇÃO] Dado o objeto abaixo, faça um programa que imprime no
// console o nome, cpf e telefone formatados. Dica: Separe o código em funções
// de formatação para cada um dos campos.
// Exemplo de Entrada 1:
// {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}
// Exemplo de Saída 1:
// Analu dos Santos Baptista
// 147.762.139-31
// (83) 2800-8258
// Exemplo de Entrada 2:
// {nome: 'Cláudio da silva figueiredo ', cpf: '47187999887', telefone:
// '11988754092'}
// Exemplo de Saída 2:
// Cláudio da silva figueiredo
// 471.879.998-87
// (11) 98875-4092

const user = {
  nome: "Analu dos santos baptista",
  cpf: "14776213931",
  telefone: "8328008258",
}

const formatName = ({ nome }) => {
  return nome
    .split(" ")
    .map((string) => string.replace(string[0], string[0].toUpperCase()))
    .join(" ")
}
console.log(formatName(user))

const formatCpf = ({ cpf }) => {
  return cpf
    .split("")
    .map((num, index) => {
      if (index === 3 || index === 6) {
        return `.${num}`
      } else if (index === 9) {
        return `-${num}`
      } else {
        return `${num}`
      }
    })
    .join("")
}
console.log(formatCpf(user))

const formatTel = ({ telefone }) => {
  return telefone
    .split("")
    .map((num, index) => {
      if (index === 0) {
        return `(${num}`
      } else if (index === 1) {
        return `${num}) `
      } else if (index === 6) {
        return `-${num}`
      } else {
        return `${num}`
      }
    })
    .join("")
}
console.log(formatTel(user))
