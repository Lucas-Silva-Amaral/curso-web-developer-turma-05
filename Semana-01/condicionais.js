let x = 5;

//IF

if (x > 5) {
  // o que estiver aqui dentro será executado true
  console.log("x é maior que 5");
} else if (x === 5) {
  // o que estiver aqui dentro será executado true
  console.log("x é 5");
} else {
  // o que estiver aqui dentro será executado true
  console.log("x é menor que 5");
}

// Switch case

let operacao = "*";

switch (operacao) {
  case "+":
    console.log("operação de soma");
    break;
  case "-":
    console.log("operação de subtração");
    break;
  case "*":
    console.log("operação de multiplicação");
    break;
  case "/":
    console.log("operação de divisão");
    break;
  default:
    console.log("operação inválida");
}
