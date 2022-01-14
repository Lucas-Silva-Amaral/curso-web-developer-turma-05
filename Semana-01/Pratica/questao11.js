// 11 - Tendo como informação os três lados de um triângulo faça um programa
// que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
// OBS: Triângulo Equilátero → Possui os 3 lados iguais;
// Triângulo Isósceles → Possui 2 lados iguais;
// Triângulo Escaleno → Possui 3 lados diferentes.
// Os valores de entrada serão:
// Lado 1;
// Lado 2;
// Lado 3.
// Exemplo de Entrada:
// 10
// 5
// 10
// -----------------
// 2
// 1
// 5
// Exemplo de Saída:
// Triângulo Isósceles
// -----------------
// Triângulo Escaleno

let side1 = 10
let side2 = 10
let side3 = 10

if (side1 === side2 && side2 === side3) {
  console.log("Triângulo Equilátero")
} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
  console.log("Triângulo Escaleno")
} else {
  console.log("Triângulo Isósceles")
}
