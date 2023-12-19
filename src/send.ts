const axios = require("axios");

async function send() {
  try {
    const response = await axios.post("http://127.0.0.1:3000/", "Hello");
    const resp = response.data;
    console.log(resp);
    console.log(`API Response: ${resp}`);
  } catch (error) {
    console.error("API Error:", error);
  }
}

send();