exports.handler = async function (event, context) {
  let statusCode = 200;
  const { category, product } = event.queryStringParameters;
  try {
    const productData = require(`../src/shop/${category}/${product}_info.json`);
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        message: error,
      },
    };
  }
  console.log(productData);
  //   console.log(category, product)
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      category: category,
      product: product,
      product_data: productData,
    },
  };
};
