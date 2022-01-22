import axios from "axios"

// 1. Crie uma função que gere uma lista de 20 CEP’s aleatórios. Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. Use essa informação para gerar os CEP’s dentro dessa faixa.

export const cepRandom = () => {
  let ceps = []
  let min = 29000000
  let max = 29099999
  for (let i = 0; i < 20; i++) {
    let cepsRandom = Math.floor(Math.random() * (max - min + 1)) + 29000000
    ceps.push(cepsRandom)
  }
  return ceps
}

export const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/96150000/json/`)
    return data
  } catch (error) {
    console.log("Ocorreu um erro")
  }
}
console.log(searchFromCep())
