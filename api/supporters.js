const path = require('path');
const fs = require('fs');

exports.handler = async function (event, context) {
  let patronData
  try {
    patronData = fs.readFileSync(path.join(__dirname, '..', 'src', 'patrons.json'), 'utf-8');
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
      "Content-Type": "application/json",
    },
    body: patronData,
  };
};
