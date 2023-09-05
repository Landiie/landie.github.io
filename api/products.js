exports.handler = async function (event, context) {
  const { category, product } = event.queryStringParameters
  const productData = require(`./src/shop/${category}/${product}_info.json`)
  console.log(productData)
  //   console.log(category, product)
  return {
    statusCode: 200,
    body: JSON.stringify({
      category: category,
      product: product,
      product_data: productData,
    }),
  }
}
