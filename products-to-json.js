const fs = require("fs")
const path = require("path")

const trimExt = (file) => {
  let fileNoExt = file.replace("_info.json", "")
  return fileNoExt
}
sammiExtensions()

function sammiExtensions() {
  const directoryPath = "src/shop/sammi-extensions/" // input .json files
  const outputFile = "src/shop/sammi-extensions/products.json" // output .json file
  let products = []
  let productNames = []

  fs.readdirSync(directoryPath).forEach((file) => {
    if (!file.endsWith("info.json")) return

    const jsonData = JSON.parse(
      fs.readFileSync(path.join(directoryPath, file), "utf-8")
    )

    const productName = trimExt(file)
    products.push(jsonData)
    productNames.push(jsonData.title)
  })

  const returnObj = {
    product_names: productNames,
    products: products,
  }

  fs.writeFileSync(outputFile, JSON.stringify(returnObj))
}
