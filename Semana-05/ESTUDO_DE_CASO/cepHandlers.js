import axios from "axios"
import { input } from "console-input"

export const inputCep = () => input("Digite seu Cep: ")

export const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return data
  } catch (error) {
    console.log("Ocorreu um erro")
  }
}
