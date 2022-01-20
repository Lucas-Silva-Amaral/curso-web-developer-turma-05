//[X] criar uma funcao para ler a entrada do usuario
//[X] criar uma funcao para buscar as informacoes do cep passado com o parametro (logradouro, bairro, localidade, uf)
//[X] criar funcao para salvar os dados em um arquivo
//[X] integrar as funcoes

import { inputCep, searchFromCep } from "./cepHandlers.js"
import saveToJSON from "./writeFile.js"

const main = async () => {
  const cep = inputCep()
  const { logradouro, bairro, localidade, uf } = await searchFromCep(cep)
  const data = {
    logradouro,
    bairro,
    localidade,
    uf,
  }
  saveToJSON(data, "arquivo.json")
}

main()
