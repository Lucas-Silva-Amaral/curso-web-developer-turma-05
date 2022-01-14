// 1 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima
// na tela todos os nomes (na mesma linha).
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
// Exemplo de Saída:
// Angela, Rosa, Ticiana, Carla, Renata

let users = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"]
const usersSubst = users.join(", ")
console.log(usersSubst)
