// 9 - [REFATORAÇÃO] Dado um array de números, faça um programa que encontre
// o menor elemento deste array e sua posição. Mostre as informações
// encontradas no console.
// OBS: Para melhorar a resolução desse problema, monte um programa que
// também consegue retornar qual o maior valor e qual a sua posição.
// Exemplo de Entrada:
// [1,2,3,4,-5,6,7,8,9,10]
// Exemplo de Saída:
// Menor valor: -5
// Posição: 4

const show = (value) => console.log(value)
const arrayNumber = [1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 30]
const cont = 0

const larger = (arrayNumber, cont, show) => {
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > arrayNumber[cont]) {
      cont = i
    }
  }
  show(`Maior valor: ${arrayNumber[cont]}`)
  show(`Posição: ${cont}`)
}

larger(arrayNumber, cont, show)
