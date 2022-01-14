// 14 - Dado um array de números, faça um programa que encontre o menor
// elemento deste array e sua posição. Mostre as informações encontradas no
// console.
// Exemplo de Entrada:
// [1,2,3,4,-5,6,7,8,9,10]
// Exemplo de Saída:
// Menor valor: -5
// Posição: 4

const array = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10]
let smaller = 0
let position = 0

for (let i = 0; i < array.length; i++) {
  if (array[i] < smaller) {
    smaller = array[i]
    position = i
  }
}

console.log(`Menor valor: ${smaller}`)
console.log(`Posição: ${position}`)
