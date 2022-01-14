// 11 - Crie um algoritmo que tem como entrada um array de notas, e imprime no
// console a média aritmética dessas notas.
// Exemplo Entrada:
// [6, 8, 7]
// Exemplo Saída:
// 7

const array = [6, 8, 7]
let sum = 0

function media(array) {
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}

const result = media(array)
console.log(result)
