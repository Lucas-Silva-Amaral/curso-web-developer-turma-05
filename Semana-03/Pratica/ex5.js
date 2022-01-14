// 5 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um número e
// imprime a sua tabuada do 1 ao 10.
// OBS: Para melhorar a resolução desse problema, monte um código que aceite
// um segundo valor e irá imprimir a tabuada de 1 até esse valor.

const show = (value) => console.log(value)

const timesTable = (num, show) => {
  aux = ""
  for (let i = 1; i <= 10; i++) {
    aux += `${num} x ${i} = ${num * i}\n`
  }
  show(aux)
}

timesTable(5, show)
