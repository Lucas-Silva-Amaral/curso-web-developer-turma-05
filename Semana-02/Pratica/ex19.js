// 19 - Crie um algoritmo que tem como entrada um array de strings e trata essas
// string substituindo os números por letra de acordo com a tabela a seguir, além
// disso, deve remover os espaços em branco no começo e fim da string, se
// existirem.
// Tabela:
// 1 : i
// 3 : e
// 4 : a
// 5 : s
// 0 : o
// Exemplo entrada:
// [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
// Exemplo Saída:
// [ 'helloworld', 'webdeveloper', 'otterwise', 'javascript'

const show = (value) => console.log(value)

const array = [" h3ll0 w0rld", " w3b d3v3l0p3r ", "0tterw1s3", "j4v4scr1pt "]
let assist = ""

function alterArray(array, show) {
  for (let i = 0; i < array.length; i++) {
    assist = ""
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "0") {
        assist += "o"
      } else if (array[i][j] === "1") {
        assist += "i"
      } else if (array[i][j] === "3") {
        assist += "e"
      } else if (array[i][j] === "4") {
        assist += "a"
      } else if (array[i][j] === "5") {
        assist += "s"
      } else if (array[i][j] === " ") {
        assist += ""
      } else {
        assist += array[i][j]
      }
    }
    array[i] = assist
  }

  show(array)
}

alterArray(array, show)
