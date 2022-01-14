const name = "Lucas"
const age = 26

const updateDate = "Data de atualizacao"

const people = {
  name: "Lucas",
  age: 26,
  address: {
    street: "Rua dos bobos",
    number: 123,
  },
  "likes birds": true,
  [updateDate]: "2020-06-01",
  competencias: ["JavaScript", "React", "Node"],
}

console.log(people.name)
console.log(people["likes birds"])
console.log(people[updateDate])
