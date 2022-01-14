// 24 - Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
// pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
// Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
// benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
// entrada os dois valores mensais oferecidos e tome a decisão informando qual
// proposta a pessoa deve aceitar.

let clt = 0
let pj = 0

function proposal(clt, pj) {
  clt = clt + clt * 0.08 + 700 + clt / 12
  pj = pj
  if (clt > pj) {
    console.log(
      `A pessoa deve aceitar a proposta CLT com o valor de R$ ${clt * 12}`
    )
  } else {
    console.log(
      `A pessoa deve aceitar a proposta PJ com o valor de R$ ${pj * 12}`
    )
  }
}

proposal(1600, 2500)
