exports.handler = async function (event, context) {
  try {
    patronData = require(`../src/patrons.json`);
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
  return {
    statusCode: 200,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      patrons: patronData,
    }),
  };
};
