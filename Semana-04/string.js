// Metodos de strings

// METODOS PARA EXTRAIR CONTEUDO DE UMA STRING
// Slice

const str = "maca, Banana, laranja"
const part = str.slice(1, 12)

console.log(part)

// substring - (TEM MAIS VALOR SEMANTICO)

const part2 = str.substring(1, 12)
console.log(part2)

// substr - (DEPRECIADO)

const part3 = str.substr(1, 12)
console.log(part3)

// METODOS PARA MODIFICAR CONTEUDOS DE UMA STRING

// Replace

let text = "Ola alunos Otterwise Otterwise"
let newText = text.replace("Otterwise", "do curso web developer")
let newText2 = text.replaceAll("Otterwise", "teste")
console.log(newText)
console.log(newText2)

// Regex   i = deixa a string caseSensitive | g = todas as ocorrencias do padrao

let newTextRegex = text.replace(/Otterwise/gi, "do curso web developer")
console.log(newTextRegex)

// toUpperCase() || toLowerCase()

const name = "lucas"
console.log(name.toUpperCase())
console.log(name.toLowerCase())

// trim() - remove os espacos

const frase = "                  oi tudo bem ?"
console.log(frase.trim())

// padStart e padEnd

const numero = "5"
console.log(numero.padStart(4, "0"))
console.log(numero.padEnd(4, "0"))

// split()

const arrayFuits = str.split(",")
console.log(arrayFuits)
