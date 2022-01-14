// METODOS DE INTERACAO

const users = ["joao", "gustavo", "emersson", "wallace"]

// foreach - nao retorna nada

users.forEach((user, index, array) => {
  console.log(user)
  console.log(index)
  console.log(array)
})

// map - e necessario mudar os valores de um array

const newUsers = users.map((user, index) => {
  if (index === 0) {
    return {
      name: user,
    }
  } else {
    return user
  }
})

console.log([1, 1, 2, 3].map((num) => num * 2))

console.log(newUsers)

// filter - retorna um array com os elementos que passaram no teste

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter((number) => {
  return number % 2 === 0
})

console.log(filteredNumbers)

// find - Procura um elemento no array e retorna o primeiro elemento que atende a condicao

const studentsAndTeachers = [
  {
    name: "Lucas",
    role: "estudante",
    id: 2,
  },
  {
    name: "joao",
    role: "professor",
    id: 1,
  },
  {
    name: "Maria",
    role: "professor",
    id: 3,
  },
]
// destrucuring no role
const student = studentsAndTeachers.find(({ role }) => {
  return role === "estudante"
})

console.log(student)

// every - retorna true ou false se todos os elementos atenderem a condicao

const isEveryStudent = studentsAndTeachers.every(({ role }) => {
  return role === "estudante"
})

console.log(isEveryStudent)

// some - retorna true ou false se algum elemento atende a condicao ele ve se tem algum elemento que atende a condicao

const hasTeacher = studentsAndTeachers.some(({ role }) => {
  return role === "professor"
})

console.log(hasTeacher)

// sort  - ordena os elementos do array

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort((a, b) => b - a))

const sortArray = studentsAndTeachers.sort((a, b) => {
  return a.id - b.id
})

console.log(sortArray)

// reduce - retorna um valor a partir de um array

const numbersToReduce = [-8, 12, 76, 100, -230, -7, 120]

const sum = numbersToReduce.reduce((acc, num) => {
  return acc + num
}, 0)
console.log(sum)

const products = [
  {
    name: "banana",
    category: "fruta",
  },
  {
    name: "alface",
    category: "verdura",
  },
  {
    name: "maca",
    category: "fruta",
  },
  {
    name: "cenoura",
    category: "legume",
  },
  {
    name: "pessego",
    category: "fruta",
  },
  {
    name: "couve",
    category: "verdura",
  },
]

const categoriesCount = products.reduce(
  (acc, product) => {
    // acc[product.category] = acc[product.category] + 1
    if (product.category === "legume") {
      acc.legume = acc.legume + 1
      return acc
    }
    if (product.category === "fruta") {
      acc.fruta = acc.fruta + 1
      return acc
    }
    if (product.category === "verdura") {
      acc.verdura = acc.verdura + 1
      return acc
    }
  },
  {
    fruta: 0,
    legume: 0,
    verdura: 0,
  }
)
console.log(categoriesCount)
