const fetch = require("node-fetch");

module.exports = async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    let x;
    for (x = 0; x < 5; x++){
        console.log(json.data.children[x].data.title);
    }
  } catch (error) {
    console.log(error);
  }
};