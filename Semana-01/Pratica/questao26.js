// 26 - Uma pessoa desenvolvedora resolveu trabalhar como freelancer e quer
// conseguir colocar o preço nos trabalhos que ela irá pegar. As informações que
// ela terá como entrada do seu programa são: O valor mensal do salário que ela
// quer ter; Ela irá trabalhar 160 horas no mês; O custo que ela tem com impostos
// e demais despesas empresariais é o valor do salário mensal dela, ou seja, ela irá
// precisar do dobro do valor que ela pretende adquirir como salário para
// conseguir pagar os seus impostos e ficar com o seu salário. Levando em
// consideração que ela estipula o preço por horas que ela irá utilizar para concluir
// o projeto, faça um programa que tenha como entrada variável a quantidade de
// horas e como saída no console o preço que custará esse projeto.

let salary = 2000

function projectPrice(salary, hours) {
  let price = (salary / 160) * hours * 2
  return `O preço do projeto é R$ ${price}`
}
const result = projectPrice(180)
console.log(result)
