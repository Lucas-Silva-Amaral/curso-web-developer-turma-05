// 8 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que tenha
// como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
// array.
// Exemplo de Entrada:
// [‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
// ‘Carla’
// Exemplo de Saída:
// O nome Carla existe no Array.

const users = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
  "Carla",
]

const filterUsers = (users, name) => {
  const usersFilter = users.filter((user) => {
    user.toLowerCase() === name.toLowerCase()
  })
  let result = usersFilter
    ? `O nome ${name} existe na array`
    : "Nao existe no array"

  console.log(result)
}
filterUsers(users, "juliana")
