// 5. Através do array de usuários abaixo imprima no console todas a skills que cada usuario tem:
const users = [
  {
    name: "Joao",
    skills: ["Javascript", "ReactJS", "Redux"],
  },
  {
    name: "Pedro",
    skills: ["VueJS", "Ruby on Rails", "Elixir"],
  },
]

for (let i = 0; i < users.length; i++) {
  console.log("=".repeat(33))
  console.log(`${users[i].name} possui as seguintes skills: `)
  console.log("=".repeat(33))
  for (let j = 0; j < users[i].skills.length; j++) {
    console.log(users[i].skills[j])
  }
}
