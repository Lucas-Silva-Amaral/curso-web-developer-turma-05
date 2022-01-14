// 3. Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostra o maior numero da lista

const array = [6, 21, 9, 2, 50, 98, 1]

function larger(a) {
  return Math.max(...a)
}

console.log(larger(array))
