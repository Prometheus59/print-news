//const fetchReddit = require("./request/fetchReddit.js");
const reddit = require("./request/reddit");
const ph = require("./request/producthunt");
const reddit_url = "https://www.reddit.com/r/popular/top.json?t=day";

const count = 5;
let printArray = [];

let Reddit = new reddit(reddit_url);
let ProductHunt = new ph();

const print = async () => {
  // const result = await Reddit.default(5);
  let result = await ProductHunt.default(5);
  console.log(result);
};
print();

//Reddit.keyboard();

// TODO: Add posts from hacker news
