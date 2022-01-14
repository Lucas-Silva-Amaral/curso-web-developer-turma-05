// 21 - Crie uma função chamada calculate que possui três parâmetros. O primeiro
// é uma string e os outros dois, números. A string será uma das seguintes opções:
// "soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
// resultado da operação (definida pela string) entre os dois números.
// Exemplo de Entrada:
// "soma"
// 3
// 5
// -----------------
// "divide"
// 21
// 7
// Exemplo de Saída:
// 8
// -----------------
// 3

function calculate(string, num1, num2) {
  switch (string) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operação inválida";
  }
}

console.log(calculate("*", 3, 5));
