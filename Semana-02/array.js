let num = 0

let numArray = [10, 20, 30, 40]

console.log(numArray[1] + numArray[2])

let fruits = ["banana", "orange", "apple", "kiwi"]
console.log(fruits[0])

function hello() {
  return "Hello World"
}

let fruitsAndNumbers = [
  "banana",
  "orange",
  "apple",
  "kiwi",
  10,
  20,
  30,
  40,
  null,
  undefined,
  true,
  false,
  hello,
]

console.log(fruitsAndNumbers[12]())

fruitsAndNumbers[0] = "pear"

console.log(fruitsAndNumbers)
