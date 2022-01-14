// 2. Levando em consideração o array de usuários abaixo: [{id: 3, name: “joao”, active: false}, {id: 2, name: “gabriel” active: false}, {id: 1, name: “mari”, active: true}, {id: 0, name: “miguel”, active: false}]
// Escreva um programa que imprime na tela o nome de todos os usuários ativos
// Escreva um programa que imprime na tela quantos usuários não estão ativos
// Escreva um programa que imprime na tela se existe algum usuário ativo
// Escreva um programa que imprime na tela o array ordenado por id em ordem crescente

const users = [
  { id: 3, name: "joao", active: false },
  { id: 2, name: "gabriel", active: false },
  { id: 1, name: "mari", active: true },
  { id: 0, name: "miguel", active: false },
]

// FILTER()
const filterUsers = (users, alt) => {
  if (alt.toUpperCase() === "Ativos".toUpperCase()) {
    const userActive = users.filter((user) => user.active)
    console.log(userActive)
  } else {
    const userInative = users.filter((user) => !user.active)
    console.log(userInative)
  }
}
filterUsers(users, "inativos")

// SOME()
const findUsers = (users) => {
  const someUsersActive = users.some((user) => user.active)
  console.log(
    someUsersActive ? "Existe um usuario ativo" : "Nao existe usuario ativo"
  )
}
findUsers(users)

// SORT()

const sortUsers = (users) => {
  const sortUsersId = users.sort((a, b) => b.id - a.id)
  console.log(sortUsersId)
}
sortUsers(users)
