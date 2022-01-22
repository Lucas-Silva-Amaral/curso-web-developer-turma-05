import fs from "fs"

const formatFile = (fileName) => {
  const csv = fs.readFileSync(fileName, "utf8")
  let lines = csv.split("\r\n")
  const headers = lines[0].split(",")
  headers.pop()
  const data = lines.slice(1)
  const json = data.map((line) => {
    const obj = {}
    const currentLine = line.split(",")
    headers.forEach((header, index) => {
      obj[header] = currentLine[index]
    })
    return obj
  })
  for (let i = 0; i < json.length; i++) {
    json[i].preco = json[i].preco.replace("", "R$")
    json[i].preco = json[i].preco.replace(".", ",")
    json[i].id = parseInt(json[i].id)
  }
  return json
}

export default formatFile
