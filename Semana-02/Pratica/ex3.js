// 3 - Dado um array de nomes, faça um programa que imprima na tela todos os
// nomes (na mesma linha).
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
// Exemplo de Saída:
// Angela, Rosa, Ticiana, Carla, Renata

const array = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"]
let aux = ""

for (let i = 0; i < array.length; i++) {
  aux = aux + array[i] + ", "
}

console.log(aux)
