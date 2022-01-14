const person = {
  name: "John",
  age: 30,
  address: {
    street: "50 Main st",
    number: 123456789,
  },
}

console.log(person.name)
console.log(person.age)
console.log(person.address)
console.log(person.number)

const {
  name,
  age,
  address: { street, number },
} = person //trasforma

// Destructuring em arrays

const names = ["John", "Jane", "Mary"]

console.log(names[0]) // John
console.log(names[1]) // Jane
console.log(names[2]) // Mary

const [name1, name2] = names //para pular uma posicao em array usar virgula

console.log(name1) // John
console.log(name2) // Jane

const [, , name3] = names //para pular duas posicoes em array usar virgula

console.log(name3) // Mary

// Destructuring em parametros de funcoes

const users = ["John", "Jane", "Mary"]

//const [fisrtElement] = users
const getFirstElement = ([firstElement]) => {
  return firstElement
}

console.log("getFirstElement", getFirstElement(users)) // John

const user = {
  name: "John",
  age: 30,
}

const getName = ({ name }) => {
  return name
}

console.log("getName", getName(user)) // John

const user2 = [{ name: "John" }]

const getFirstElementName = ([{ name }]) => {
  return name
}

console.log("getFirstElementName", getFirstElementName(user2)) // John
