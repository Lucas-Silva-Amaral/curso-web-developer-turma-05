// 21 -  Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada. Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

// Dado um array de objetos como entrada com todos os experimentos realizados por Maria, sendo R:Rato, S:Sapo e C:Coelho. Faça uma função que recebe como parâmetro um array e imprime no console um relatório com o total de cobaias, o quanto foi utilizado de cada cobaia e a porcentagem de cada cobaia.
// OBS: O percentual deve ser apresentado com dois dígitos após o ponto.

// Exemplo de Entrada:
// [
//   { quantidade: 10, cobaia: "C" },
//   { quantidade: 6, cobaia: "R" },
//   { quantidade: 15, cobaia: "S" },
//   { quantidade: 5, cobaia: "C" },
//   { quantidade: 14, cobaia: "R" },
//   { quantidade: 9, cobaia: "C" },
//   { quantidade: 6, cobaia: "R" },
//   { quantidade: 8, cobaia: "S" },
//   { quantidade: 5, cobaia: "C" },
//   { quantidade: 14, cobaia: "R" },
// ]

// Exemplo de Saída:
// Total: 92 cobaias
// Total de coelhos: 29
// Total de ratos: 40
// Total de sapos: 23
// Percentual de coelhos: 31.52%
// Percentual de ratos: 43.48%
// Percentual de sapos: 25.00%

const array = [
  { quantidade: 10, cobaia: "C" },
  { quantidade: 6, cobaia: "R" },
  { quantidade: 15, cobaia: "S" },
  { quantidade: 5, cobaia: "C" },
  { quantidade: 14, cobaia: "R" },
  { quantidade: 9, cobaia: "C" },
  { quantidade: 6, cobaia: "R" },
  { quantidade: 8, cobaia: "S" },
  { quantidade: 5, cobaia: "C" },
  { quantidade: 14, cobaia: "R" },
]

const relatorio = (array) => {
  let total = 0
  let coelhos = 0
  let ratos = 0
  let sapos = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i].quantidade
    for (let h = 0; h < array[i].cobaia.length; h++) {
      if (array[i].cobaia === "C") {
        coelhos += array[i].quantidade
      }
      if (array[i].cobaia === "R") {
        ratos += array[i].quantidade
      }
      if (array[i].cobaia === "S") {
        sapos += array[i].quantidade
      }
    }
  }
  let coelhosPer = (coelhos * 100) / total
  let ratosPer = (ratos * 100) / total
  let saposPer = (sapos * 100) / total

  console.log("=".repeat(20))
  console.log(`Total: ${total} cobaias
Total de coelhos: ${coelhos}
Total de ratos: ${ratos}
Total de sapos: ${sapos}
Percentual de coelhos: ${coelhosPer.toFixed(2)}%
Percentual de ratos: ${ratosPer.toFixed(2)}%
Percentual de sapos: ${saposPer.toFixed(2)}%`)
  console.log("=".repeat(20))
}

relatorio(array)
