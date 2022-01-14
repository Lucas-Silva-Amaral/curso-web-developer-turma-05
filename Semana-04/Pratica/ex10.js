// 10 - Escreva um programa para encontrar os elementos comuns entre dois
// arrays
// Exemplo de Entrada:
// [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
// [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]
// Exemplo de Saída:
// [22, -19, 13]

const arrayOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127, 300, 4000]
const arrayTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255, 300, 4000]

const commonElements = (array1, array2) => {
  let common = array1.filter((num) => {
    return array2.indexOf(num) !== -1
  })
  console.log(common)
}
commonElements(arrayOne, arrayTwo)
