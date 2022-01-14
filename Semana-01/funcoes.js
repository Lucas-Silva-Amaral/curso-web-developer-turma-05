// Funcoes regulares

function soma(a, b) {
  return a + b;
}

let somaEntreDoisNumeros = soma(2, 3);
console.log(somaEntreDoisNumeros);

// Funcoes sem parametro

function sayHello() {
  console.log("Hello");
}
sayHello();

function selectOperation(operation) {
  switch (operation) {
    case "+":
      return soma;
    case "-":
      return subtracao;
    case "*":
      return multiplicacao;
    case "/":
      return divisao;
    default:
      return "Operação inválida";
  }
}
const operation1 = selectOperation("+");

console.log(operation1);
