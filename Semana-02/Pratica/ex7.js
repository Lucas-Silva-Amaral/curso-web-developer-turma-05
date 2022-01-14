// 7 - Dado um array de números, mostre quantos valores são pares, quantos são
// ímpares, quantos são positivos e quantos são negativos.
// Exemplo de Entrada:
// [-5,0,-3,-4,12]
// Exemplo de Saída:
// 3 valor(es) par(es)
// 2 valor(es) impar(es)
// 1 valor(es) positivo(s)
// 3 valor(es) negativo(s)

const array = [-5, 0, -3, -4, 12]
let pair = 0
let odd = 0
let positive = 0
let negative = 0

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    pair++
  }
  if (array[i] % 2 !== 0) {
    odd++
  }
  if (array[i] > 0) {
    positive++
  }
  if (array[i] < 0) {
    negative++
  }
}

console.log(" ".repeat(20))
console.log(`${pair} valor(es) par(es)`)
console.log("-".repeat(20))
console.log(`${odd} valor(es) impar(es)`)
console.log("-".repeat(20))
console.log(`${positive} valor(es) positivo(s)`)
console.log("-".repeat(20))
console.log(`${negative} valor(es) negativo(s)`)
