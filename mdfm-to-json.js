const fs = require("fs")
const crypto = require("crypto")
const path = require("path")

const directoryPath = "src/sammi-extensions/" // input .md files
const outputDirectory = "src/shop/sammi-extensions" // output .json files

// Function to create a directory if it doesn't exist
const createDirectoryIfNotExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }
}

// Ensure the output directory exists
createDirectoryIfNotExists(outputDirectory)

const getHash = (content) => {
  const hash = crypto.createHash("md5")
  const data = hash.update(content, "utf-8")
  const gen_hash = data.digest("hex")

  return gen_hash
}

const trimExt = (file) => {
  let fileNoExt = file.replace(".md", "")
  fileNoExt = fileNoExt.replace("-", "_")

  return fileNoExt
}

const getJsonData = (mdContent) => {
  const posEnd = mdContent.indexOf(`\n---`)
  const jsonData = mdContent.substring(9, posEnd)

  return jsonData
}

fs.readdirSync(directoryPath).forEach((file) => {
  if (file.endsWith("docs.md") || !file.endsWith(".md")) return

  let needsWrite = true

  const mdContent = fs.readFileSync(path.join(directoryPath, file), "utf-8")
  const fileNoExt = trimExt(file)
  const jsonFileName = `${fileNoExt}_info.json`
  const jsonData = getJsonData(mdContent)

  const jsonExists = fs.existsSync(path.join(outputDirectory, jsonFileName))
  console.log(jsonExists)

  if (jsonExists) {
    const jsonContent = fs.readFileSync(
      path.join(outputDirectory, jsonFileName),
      "utf-8"
    )
    const jsonExistingHash = getHash(jsonContent)
    const jsonNewHash = getHash(jsonData)
    console.log(jsonExistingHash)
    console.log(jsonNewHash)

    if (jsonNewHash == jsonExistingHash) needsWrite = false
  }
  if (needsWrite) {
    console.log(`${jsonFileName} needs writing!`)
    fs.writeFileSync(path.join(outputDirectory, jsonFileName), jsonData)
  } else {
    console.log(`No write for ${jsonFileName}`)
  }
})
