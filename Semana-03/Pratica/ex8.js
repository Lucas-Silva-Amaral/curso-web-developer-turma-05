// 8 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
// e imprime no console a média aritmética dessas notas.
// OBS: Para melhorar a resolução desse problema, monte um programa que
// retorna a média aritmética independente do tamanho do array.
// Exemplo Entrada:
// [6, 8, 7]

const show = (value) => console.log(value)

const grades = [6, 8, 7, 9, 10.5, 11.5, 12.5, 13.5, 14, 20]

const avange = (grades, show) => {
  let sum = 0
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
  }
  show(sum / grades.length)
}

avange(grades, show)
