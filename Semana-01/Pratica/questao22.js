// 22 - Pegue um valor de entrada e calcule o menor número de notas possíveis
// (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
// 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
// necessárias.

function grades(v) {
  let n100 = Math.floor(v / 100)
  let n50 = Math.floor((v % 100) / 50)
  let n20 = Math.floor(((v % 100) % 50) / 20)
  let n10 = Math.floor((((v % 100) % 50) % 20) / 10)
  let n5 = Math.floor(((((v % 100) % 50) % 20) % 10) / 5)
  let n2 = Math.floor((((((v % 100) % 50) % 20) % 10) % 5) / 2)
  let n1 = Math.floor(((((((v % 100) % 50) % 20) % 10) % 5) % 2) / 1)

  return `
  R$: ${v},00
  ${"=".repeat(20)}
  ${n100} nota(s) de R$ 100,00
  ${n50} nota(s) de R$ 50,00
  ${n20} nota(s) de R$ 20,00
  ${n10} nota(s) de R$ 10,00
  ${n5} nota(s) de R$ 5,00
  ${n2} nota(s) de R$ 2,00
  ${n1} nota(s) de R$ 1,00
  `
}

const relaction = grades(673)
console.log(relaction)
