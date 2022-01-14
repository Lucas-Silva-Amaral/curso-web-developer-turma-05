// 1. Crie uma função que recebe uma string (com quatro possibilidades: “soma”, “subtrai”, “divide”, “multiplica”) e dois números. A função deve retornar a operação realizada informada pela string nos dois números.

// Exemplo Entrada:
// myFunction(‘soma’)(3)(5)

// Exemplo Saída:
// 8

const show = (value) => {
  console.log(value)
}

const calc = {
  soma: (num1, num2, callback) => callback(num1 + num2),
  subtrai: (num1, num2, callback) => callback(num1 - num2),
  divide: (num1, num2) => callback(num1 / num2),
  multiplica: (num1, num2, callback) => callback(num1 * num2),
}

const { soma, subtrai, divide, multiplica } = calc

soma(3, 5, show)

// ----------------------------- ******-------------
const calcSwitch = (operacao) => {
  return (num1) => {
    return (num2) => {
      switch (operacao) {
        case "soma":
          return num1 + num2
        case "subtrai":
          return num1 - num2
        case "divide":
          return num1 / num2
        case "multiplica":
          return num1 * num2
        default:
          return "Operação inválida"
      }
    }
  }
}
console.log(calcSwitch("soma")(3)(5))

// Exemplo Professor

const calculate = (operation) => {
  const operations = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
    mult: (a, b) => a * b,
  }
  return (numberOne) => (numberTwo) =>
    operations[operation](numberOne, numberTwo)
}

console.log(calculate("sum")(3)(5))

const calculate2 = (operation) => {
  return (numberOne) => {
    return (numberTwo) => {
      switch (operation) {
        case "sum":
          return numberOne + numberTwo
        case "sub":
          return numberOne - numberTwo
        case "div":
          return numberOne / numberTwo
        case "mult":
          return numberOne * numberTwo
        default:
          break
      }
    }
  }
}
