// 1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
// notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
// consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
// relação de notas necessárias.

const bills = [100, 50, 20, 10, 5, 2, 1]

const show = (value) => console.log(value)

function cedulas(bills, value, show) {
  quantBills = 0
  for (let i = 0; i < bills.length; i++) {
    quantBills = Math.floor(value / bills[i])
    value = value % bills[i]
    show(`${quantBills} nota(s) de R$ ${bills[i]},00`)
  }

  show(value)
}

cedulas(bills, 551, show)
