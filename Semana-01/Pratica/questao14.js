// 14 - Faça um programa que receba de entrada três valores e mostre no console
// a soma dos dois maiores.

function sumBigger(n1, n2, n3) {
  if (n1 < n2 && n1 < n3) {
    return n2 + n3
  } else if (n2 < n1 && n2 < n3) {
    return n1 + n3
  } else {
    return n1 + n2
  }
}
const result = sumBigger(60, 50, 60)
console.log(result)
