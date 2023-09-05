exports.handler = async function (event, context) {
  const { category, product } = event.queryStringParameters
  console.log(category, product)
  return {
    statusCode: 200,
    body: JSON.stringify({ category: category, product: product }),
  }
}
