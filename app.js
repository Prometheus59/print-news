const getData = require("./getData.js");
const url = "https://www.reddit.com/r/popular/top.json?t=day";

let today = new Date().toString().slice(0,15);
getData(url);
console.log(`\nTop Reddit Posts ${today}`);