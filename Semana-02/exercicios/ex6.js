// 4. Crie uma função que conte quantas palavras existem na frase que for passada como parâmetro (dica: utilizem o método split de string)

const words = "Lucas silva do amaral"

function tell() {
  return words.split(" ").length
}

const result = tell(words)
console.log(result)
