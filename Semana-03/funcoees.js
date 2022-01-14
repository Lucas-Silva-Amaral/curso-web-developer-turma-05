function sum(a, b) {
  return a + b
}

const sum2 = function (a, b) {
  return a + b
}

function show(value) {
  console.log(value)
}

function sum3(a, b, callback) {
  //convencao callback
  const total = a + b
  callback(total)
  return total
}

sum3(1, 2, show)

sum3(1, 2, function (value) {
  console.log(value)
})

function sumTwoNumbers(numberOne) {
  return function (numberTwo) {
    //numberOne = 1
    //numberTwo = 2
    return numberOne + numberTwo
  }
}

console.log(sumTwoNumbers(1)(2))

// funcoes em objetos

const operation = {
  sum: function (a, b) {
    return a + b
  },
  sub: function (a, b) {
    return a - b
  },
}

console.log(operation.sum(1, 2))
console.log(operation.sub(1, 2))

// funcoes em arrays

const operationsArray = [sum]

console.log(operationsArray[0](10, 4))

// Arrow functions

const multiply = (a, b) => a * b
const multiply2 = (a, b) => {
  console.log(this) // retorna um objeto vazio pois arrow function nao tem referencia propria
  return a * b
}

console.log(multiply(10, 4))
