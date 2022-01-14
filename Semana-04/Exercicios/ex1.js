// 1. Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console

let string = "Maria, Paulo, Moisés, Joel, Ana"

let text = string.split(",")

console.log(text)
for (let i = 0; i < text.length; i++) {
  const element = text[i]
  console.log(element.trim())
}
