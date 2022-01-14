// 6 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
// na tela somente os números positivos.
// OBS: Para melhorar a resolução desse problema, crie funções que também
// imprimem os números negativos, os pares, os ímpares e realize a contagem de
// cada um deles.
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
// -----------------
// [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]

const arrayNumber = [0, 1, -2, 2, 3]
let cont = 0
let aux = ""
const show = (value) => console.log(value)

const sortFunc = (arrayNumber, cont, aux, show) => {
  const positives = (arrayNumber, cont, aux, show) => {
    for (let i = 0; i < arrayNumber.length; i++) {
      if (arrayNumber[i] > 0) {
        aux += arrayNumber[i] + ", "
        cont++
      }
    }
    show(`${cont} números positivos: ${aux}`)
  }
  positives(arrayNumber, cont, aux, show)
  const negatives = (arrayNumber, cont, aux, show) => {
    for (let i = 0; i < arrayNumber.length; i++) {
      if (arrayNumber[i] < 0) {
        aux += arrayNumber[i] + ", "
        cont++
      }
    }
    show(`${cont} números negativos: ${aux}`)
  }
  negatives(arrayNumber, cont, aux, show)
  const even = (arrayNumber, cont, aux, show) => {
    for (let i = 0; i < arrayNumber.length; i++) {
      if (arrayNumber[i] % 2 === 0) {
        aux += arrayNumber[i] + ", "
        cont++
      }
    }
    show(`${cont} números pares: ${aux}`)
  }
  even(arrayNumber, cont, aux, show)
  const odd = (arrayNumber, cont, aux, show) => {
    for (let i = 0; i < arrayNumber.length; i++) {
      if (arrayNumber[i] % 2 !== 0) {
        aux += arrayNumber[i] + ", "
        cont++
      }
    }
    show(`${cont} números ímpares: ${aux}`)
  }
  odd(arrayNumber, cont, aux, show)
}

sortFunc(arrayNumber, cont, aux, show)
