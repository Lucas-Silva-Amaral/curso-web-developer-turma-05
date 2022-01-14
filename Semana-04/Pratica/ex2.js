// 2 - Dado um array de números, faça um programa que teste se este array
// contém um valor específico. Tanto o valor quanto o array serão valores de
// entrada.
// Exemplo de Entrada:
// [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
// 9
// Exemplo de Saída:
// O valor foi encontrado no Array.

const arrayNum = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]

const someNum = (array, number) => {
  const someArray = array.some((num) => num === number)
  if (someArray !== false) {
    console.log("O valor foi encontrado no Array")
  } else {
    console.log("Valor nao encontrado no Array")
  }
}
someNum(arrayNum, 9)
