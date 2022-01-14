// 1. Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
//     Exemplo entrada: [5, 9, 10, 6]
//     Exemplo Saída: 47

const array = [5, 9, 10, 6]
let soma

for (let i = 0; i < array.length; i++) {
  soma += array[i]
  console.log(soma)
}
