//const fetchReddit = require("./request/fetchReddit.js");
const fetch = require("./request/fetchData");
const url = "https://www.reddit.com/r/popular/top.json?t=day";
const count = 5;
let today = new Date().toString().slice(0, 15);

let reddit = new fetch(url);


console.log(`\nTop ${count} Reddit Posts -- ${today}\n`);
reddit.default(5);