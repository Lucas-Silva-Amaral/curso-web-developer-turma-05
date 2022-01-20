import { multiply, hello } from "./helpers.js"
import division from "./helpers.js"
import { formatDate } from "./formatters.js"

console.log(multiply(2, 2))
hello()
console.log(division(2, 2))
console.log(new Date())
console.log(formatDate(new Date()))
