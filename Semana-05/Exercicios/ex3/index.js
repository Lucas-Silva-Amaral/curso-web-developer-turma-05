import { cepRandom, searchFromCep } from "./cepHandles.js"
import saveToJSON from "./writeFile.js"

// 2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
// Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.

const main = async () => {
  let ceps = cepRandom()
  console.log(ceps)
}
main()