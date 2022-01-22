import saveToJSON from "./writeFile.js"
import formatFile from "./formatter.js"

const data = "./lista.csv"

const main = async () => {
  try {
    const file = await formatFile(data)
    saveToJSON(file, "csvFormatted.json")
    console.log("Arquivo salvo com sucesso")
  } catch (error) {
    console.log("Ocorreu um erro")
  }
}
main()
