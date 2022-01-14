// 09 - Tendo como informação dois números, faça um programa que imprima na
// tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
// iguais, informe que eles são iguais.
// Os valores de entrada serão:
// Número 1;
// Número 2;
// Exemplo de Entrada:
// 2
// 5
// -----------------
// 7
// 7
// Exemplo de Saída:
// 5 é maior que 2
// -----------------
// 7 é igual a 7

let num1 = 7;
let num2 = 9;

if (num1 > num2) {
  console.log(num1 + " é maior que " + num2);
} else if (num1 === num2) {
  console.log(num1 + " é igual a " + num2);
} else {
  console.log(num1 + " é menor que " + num2);
}
