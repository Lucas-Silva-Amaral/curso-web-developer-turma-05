// 2. Troque todas as vírgulas na string abaixo por ponto final:
// “Olá, mundo, meu, nome, é, Juca”

let string = "Olá, mundo, meu, nome, é, Juca"
let textRegex = string.replace(/,/g, ".")
let text2 = string.replaceAll(",", ".")

console.log(textRegex)
console.log(text2)
