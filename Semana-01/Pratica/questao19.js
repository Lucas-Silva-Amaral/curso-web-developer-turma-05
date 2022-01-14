// 19 - Crie uma função chamada checkSignal que possui um parâmetro e imprime
// no console:
// "x é positivo" se o número for positivo;
// "x é negativo" se o número for negativo.
// x deve ser substituído pelo número passado como argumento.
// Exemplo de Entrada:
// 10
// -----------------
// -5
// Exemplo de Saída:
// 10 é positivo
// -----------------
// -5 é negativo

function checkSignal(n) {
  if (n > 0) {
    return "Esse numero e positivo";
  } else {
    return "Esse numero e negativo";
  }
}

console.log(checkSignal(-2));
