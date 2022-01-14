// 1. Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano se for par.

function valorPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// resolução do professor

function valorPar(num) {
  return num % 2 === 0;
}

console.log(valorPar(2));
