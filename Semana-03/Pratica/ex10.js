// 10 - [REFATORAÇÃO] Dado a lista de compras a seguir, faça um programa que
// imprime no console o valor total. Atenção, o valor de cada item é unitário.
// Exemplo de Entrada:
// [
// { nome: 'maçã', quantidade: 2, valor: 0.5},
// { nome: 'alface', quantidade: 1, valor: 1.73},
// { nome: 'Água 5L', quantidade: 2, valor: 5.99},
// { nome: 'Pão Francês', quantidade: 8, valor: 0.63}
// ]
// Exemplo de Saída:
// R$ 19.75

const show = (value) => console.log(value)

const list = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
]

const valueBuy = (list, show) => {
  let total = 0
  for (let i = 0; i < list.length; i++) {
    total += list[i].quantidade * list[i].valor
  }
  show(`R$ ${total}`)
}

valueBuy(list, show)
