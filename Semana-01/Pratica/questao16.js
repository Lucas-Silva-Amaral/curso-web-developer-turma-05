// 16 - Escreva um programa que receba como entrada dois valores. Após, o
// programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
// indicando se os valores recebidos como entrada são múltiplos entre si.

function mult(num1, num2) {
  if (num1 % num2 === 0 || num2 % num1 === 0) {
    return "São Múltiplos"
  } else {
    return "Não são Múltiplos"
  }
}

const result = mult(2, 4)
console.log(result)
