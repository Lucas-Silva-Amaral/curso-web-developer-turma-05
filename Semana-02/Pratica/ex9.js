// 9 - Dado um array de números como entrada, faça um programa que
// multiplique todos os valores por 10.
// Exemplo de Entrada:
// [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
// Exemplo de Saída:
// [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]

let array = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
let mult = null

for (let i = 0; i < array.length; i++) {
  mult = mult + array[i] * 10
  console.log(mult)
}
