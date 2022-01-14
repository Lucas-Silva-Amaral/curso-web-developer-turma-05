const test = true
const string = "" // string vazia sempre é false
const string = "a" // string vazia sempre é true

if (test) {
  console.log("Teste verdadeiro")
}

if (null) {
  console.log("Teste verdadeiro")
}

if (undefined) {
  console.log("Teste verdadeiro")
}

if (0) {
  console.log("Teste verdadeiro")
}

const array = []

if (!array.length) {
  console.log("Array esta vazio")
}
