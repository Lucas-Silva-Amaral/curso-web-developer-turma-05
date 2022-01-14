// 3 - [REFATORAÇÃO] Dado um array de números, faça um programa que
// imprima na tela somente os números positivos.
// OBS: Para melhorar a resolução desse problema, crie funções que também
// imprima os números negativos, os pares, os ímpares e realize a contagem de
// cada um deles.
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
// -----------------

const numbersArray = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255]

const filterNum = (numbers) => {
  let numPositive = numbers.filter((num) => num >= 0)
  let numNegative = numbers.filter((num) => num < 0)
  let numEven = numbers.filter((num) => num % 2 === 0)
  let numOdd = numbers.filter((num) => num % 2 !== 0)

  console.log(
    `Positivos: ${numPositive.join(", ")} || Quantidade: ${numPositive.length}`
  )
  console.log(" ")
  console.log(
    `Negativos: ${numNegative.join(", ")} || Quantidade: ${numNegative.length}`
  )
  console.log(" ")
  console.log(`Pares: ${numEven.join(", ")} || Quantidade: ${numEven.length}`)
  console.log(" ")
  console.log(`Impares: ${numOdd.join(", ")} || Quantidade: ${numOdd.length}`)
  console.log(" ")
}
filterNum(numbersArray)
