// 1. Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota. A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

// Exemplo de Saída:
// Nome Completo: João Pedro Bretanha
// Idade: 29
// Data de Nascimento: 11/04/1992
// Média: 8

const nome = "Lucas silva do amaral";
let diadoNascimento = 20;
let mesdoNascimento = 12;
let anodoNascimento = 1994;
let primeiraNota = 8;
let segundaNota = 10;
let media = (primeiraNota + segundaNota) / 2;

console.log(`Nome Completo: ${nome}`);
console.log("=".repeat(40));
console.log(`Idade: ${2020 - anodoNascimento}`);
console.log("=".repeat(40));
console.log(
  `Data de Nascimento: ${diadoNascimento}/${mesdoNascimento}/${anodoNascimento}`
);
console.log("=".repeat(40));
console.log(`Média: ${media}`);
