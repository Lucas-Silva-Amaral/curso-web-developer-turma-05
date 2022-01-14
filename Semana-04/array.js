// METODOS DE ARRAY

// concat - NAO ALTERA O ARRAY ORIGINAL
const students = ["cristian", "Alessandro", "Emersson"]
let newStudents = students.concat("Wallace")
let newStudents2 = students.concat(["Wallace", "Barros"])

console.log(students)
console.log(newStudents)
console.log(newStudents2)

// push - ALTERA O ARRAY

const fruits = ["banana", "laranja"]
fruits.push("maca")
console.log(fruits)

// join()

const joinedFruits = fruits.join(", ")

console.log(joinedFruits)

// pop() - remove o ultima elemento de um array, e modifica o array

const users = ["joao", "Barros", "Mari"]
const user = users.pop()
console.log(users)
console.log(user)

// shift() - remove o primeiro elemento e modifica o array e Retorna ele para a Variavel

const fruits2 = ["banana", "laranja"]
const fruit = fruits2.shift()

console.log(fruits2)
console.log(fruit)

// unshift() - insere elementos no inicio do array modificando o array

fruits2.unshift("limao")
console.log(fruits2)

// Slice()

const tools = ["chave de fenda", "martelo", "furadeira"]
const toolsPart = tools.slice(0, 1)
console.log(toolsPart)

// Splice - para adicionar ou remover modifica o array

// remover
tools.splice(1, 1)
console.log(tools)

//adicinar
tools.splice(8, 0, "chave de boca", "martelete")
console.log(tools)

// reverse() - modifica o array

const tiProducts = ["hd", "memoria", "ssd", "placa de video"]
const products = tiProducts.reverse()
console.log(products)
