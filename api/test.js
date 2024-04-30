const path = require("path");
const fs = require("fs");

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(fs.readdirSync(__dirname)),
  };
};
