import saveToJSON from "./writeFile.js"
import { randomCep, searchFromCep } from "./cepHandlers.js"

const main = () => {
  const ceps = randomCep()
  ceps.forEach(async (cep) => {
    try {
      const { logradouro, bairro, localidade, uf } = await searchFromCep(cep)
      if (logradouro || bairro || localidade || uf) {
        const cepObj = {
          cep,
          logradouro,
          bairro,
          localidade,
          uf,
        }

        saveToJSON(cepObj, `${cep}.json`)
      }
    } catch (error) {
      console.log("Ocorreu um erro")
    }
  })
}

main()
