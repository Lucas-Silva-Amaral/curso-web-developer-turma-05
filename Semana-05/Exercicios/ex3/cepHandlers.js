import axios from "axios"

export const randomCep = () => {
  let ceps = []
  const min = 29000000
  const max = 29099999
  for (let i = 0; i < 20; i++) {
    let cepRandom = Math.floor(Math.random() * (max - min)) + min
    ceps.push(cepRandom)
  }
  return ceps
}

export const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
    // console.log(data)
  } catch (error) {
    console.log("Ocorreu um erro")
  }
}
