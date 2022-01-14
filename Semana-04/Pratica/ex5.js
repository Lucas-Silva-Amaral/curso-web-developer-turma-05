// 5 - Escreva um programa para substituir os elementos pares pelo valor “X”.
// Exemplo de Entrada:
// [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
// Exemplo de Saída:
// [1, -7, -23, “X”, -19, 13, “X”, “X”, “X”, -153, -127]

const numbers = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
console.log(numbers)
const alterNum = (numbers) => {
  let mapNum = numbers.map((num) => {
    if (num % 2 === 0) {
      return "X"
    } else {
      return num
    }
  })
  console.log(mapNum)
}
alterNum(numbers)
