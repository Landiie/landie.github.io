// Import the Axios library
const axios = require("axios");

// Define the URL you want to make a GET request to
const apiUrl = "https://www.twitch.tv/team/miscreants/";

// Make the GET request using Axios
axios
  .get(apiUrl)
  .then(response => {
    // Handle the successful response
    const raw = response.data;

    // console.log("Response data:", response.data);
    const pos = raw.indexOf('CorgiCam');
    const cleanRaw = raw.slice(pos, raw.length)
    console.log(pos)
    console.log(cleanRaw)
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error("Error:", error);
  });
