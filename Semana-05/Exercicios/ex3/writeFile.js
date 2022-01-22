import fs from "fs"

const saveToJSON = (info, fileName) => {
  const parsedInfo = JSON.stringify(info)
  fs.writeFileSync(fileName, parsedInfo)
}
export default saveToJSON
