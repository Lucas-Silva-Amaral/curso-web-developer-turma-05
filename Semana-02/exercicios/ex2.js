// Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < array.length; i++) {
  if (i !== array.length - 1) {
    const element = array[i]
    console.log(element)
  }
}
