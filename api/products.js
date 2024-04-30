const path = require('path');
const fs = require('fs');

exports.handler = async function (event, context) {
  let productData
  const { category, product } = event.queryStringParameters;
  try {
    productData = fs.readFileSync(path.join(__dirname, '..', 'src', 'shop', category, `${product}_info.json`), 'utf-8');
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
      product_data: JSON.parse(productData),
    }),
  };
};
