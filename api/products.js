exports.handler = async function (event, context) {
  let productData
  const { category, product } = event.queryStringParameters;
  try {
    productData = require(`../src/shop/${category}/${product}_info.json`);
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: error,
      }),
    };
  }
  console.log(productData);
  //   console.log(category, product)
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: category,
      product: product,
      product_data: productData,
    }),
  };
};
