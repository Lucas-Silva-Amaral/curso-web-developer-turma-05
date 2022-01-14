// 13 - Dado um array de nomes, faça um programa que tenha como entrada um
// valor à ser pesquisado e retorne se o nome existe ou não no array.
// Exemplo de Entrada:
// [‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
// ‘Carla’
// Exemplo de Saída:
// O nome Carla existe no Array
// O nome Carla não existe no Array

const array = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
  "Renata",
  "Ticiana",
  "Rosa",
  "Angela",
  "Patricia",
  "José",
  "Paulo",
  "Paula",
  "Júlia",
  "Ana",
  "José",
  "Joana",
  "Júlia",
  "Ana",
]
let search

function pesquisar(array, search) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === search.toLowerCase()) {
      return `O nome ${search.toUpperCase()} existe no Array`
    }
  }
  return `O nome ${search} não existe no Array`
}

const result = pesquisar(array, "ana")
console.log(result)
