// 25 - A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
// imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
// tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
// ambas as propostas.
// ate 21.453,24 taxa zero
//   21.453,25 a 32.151,48 7,5%
//   32.151,49 a 42.869,16 15%
//   42.869,17 a 53.565,72 22,5%
//   acima de 53.565,72

let clt = 0
let pj = 0

function incomeTax(tax) {
  if (tax > 21453.25 && tax < 32151.48) {
    return (tax * 0.075).toFixed(2)
  } else if (tax >= 32151.49 && tax <= 42869.16) {
    return (tax * 0.15).toFixed(2)
  } else if (tax >= 42869.17 && tax <= 53565.72) {
    return (tax * 0.225).toFixed(2)
  } else if (tax > 53565.72) {
    return (tax * 0.275).toFixed(2)
  } else {
    return "Isento"
  }
}

console.log(incomeTax(proposal(1600, 2500)))
