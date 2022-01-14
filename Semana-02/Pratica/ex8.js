// 8 - Escreva um programa que tenham como entrada um valor. Este valor é a
// quantidade de linhas de saída que serão apresentadas na execução do
// programa.
// Exemplo de Entrada:
// 7
// Exemplo de Saída:
// 1 2 3 PUM
// 5 6 7 PUM
// 9 10 11 PUM
// 13 14 15 PUM
// 17 18 19 PUM
// 21 22 23 PUM
// 25 26 27 PUM

const num = 7
let cont = 1
let acul = ""

// for (let i = 0; i < num; i++) {
//   for (let j = 1; j <= 4; j++) {
//     if (j % 4 === 0) {
//       acul = acul + "PUM"
//       console.log(acul)
//       acul = ""
//     } else {
//       acul = acul + cont + " "
//     }
//     cont++
//   }
// }

for (let i = 1; i <= num * 4; i++) {
  if (i % 4 === 0) {
    acul += "PUM"
    console.log(acul)
    acul = ""
  } else {
    acul += cont + " " // ou no Lugar do cont poderia colocar i
  }
  cont++
}
