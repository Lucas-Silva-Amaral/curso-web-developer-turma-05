// 4 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima na
// tela todos os nomes (na mesma linha).
// Os valores de entrada serão:
// Array;
// Exemplo de Entrada:
// ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
// Exemplo de Saída:
// Angela, Rosa, Ticiana, Carla, Renata

const names = ["Angela", "Rosa", "Ticiana", "Carla", "Renata"]
let aux = ""
const show = (value) => console.log(value)

const arrays = (names, show) => {
  for (let i = 0; i < names.length; i++) {
    aux += names[i] + ", "
  }
  show(aux)
}

arrays(names, show)
