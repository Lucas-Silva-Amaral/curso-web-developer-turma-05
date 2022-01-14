// 2. Levando em consideração o array abaixo, crie um programa que imprima na tela o valor total que o usuário terá que pagar.
const fruits = [
  { name: "banana", price: 4.5 },
  { name: "arroz", price: 8.3 },
  { name: "feijão", price: 10 },
  { name: "cebola", price: 6.3 },
]

const total = fruits.reduce((acc, { price }) => {
  return acc + price
}, 0)
console.log(`Total a pagar: ${total}`)
