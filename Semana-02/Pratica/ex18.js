// 18 - Dado a lista de compra a seguir, faça um programa que imprime no console
// valor total. Atenção, o valor de cada item é unitário.
// Exemplo de Entrada:
// [
// { nome: 'maçã', quantidade: 2, valor: 0.5},
// { nome: 'alface', quantidade: 1, valor: 1.73},
// { nome: 'Água 5L', quantidade: 2, valor: 5.99},
// { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
// ]
// Exemplo de Saída:
// R$ 19.75

const shoppingList = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
]
let sum = 0

function sumList(list) {
  for (let i = 0; i < list.length; i++) {
    sum += list[i].quantidade * list[i].valor
  }
  return sum
}

const result = sumList(shoppingList)
console.log(`R$ ${result.toFixed(2)}`)
