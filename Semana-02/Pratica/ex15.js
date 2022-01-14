// 15 - Dado o array de objetos abaixo, faça um programa que calcule a média
// aritmética dos estudantes e imprima no console os nomes dos estudantes
// aprovados. A média de aprovação é 7.0.
// Os valores de entrada serão:
// Array de Objetos;
// Exemplo de Entrada:
// [
// {nome: 'Marcos', notas: [10, 7, 2]},
// {nome: 'Michele', notas: [10, 10, 10]},
// {nome: 'Pedro', notas: [3, 10, 9]},
// {nome: 'Andressa', notas: [6, 6, 8]},
// {nome: 'Cristiana', notas: [7, 9, 2]}
// ]
// Exemplo de Saída:
// Michele
// Pedro

const students = [
  { nome: "Marcos", notas: [10, 7, 10] },
  { nome: "Michele", notas: [10, 10, 10] },
  { nome: "Pedro", notas: [3, 10, 9] },
  { nome: "Andressa", notas: [6, 6, 8] },
  { nome: "Cristiana", notas: [7, 9, 2] },
]
let sumBills = 0
let average = 0

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].notas.length; j++) {
    sumBills += students[i].notas[j]
  }
  average = sumBills / students[i].notas.length

  if (average >= 7) {
    console.log(students[i].nome)
    console.log(`Media: ${average.toFixed(1)}`)
    console.log("-----------------")
  }
  sumBills = 0
  media = 0
}
