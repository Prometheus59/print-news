//const fetchReddit = require("./request/fetchReddit.js");
const reddit = require("./request/reddit");
const ph = require("./request/producthunt");
const format = require('./format');
const reddit_url = "https://www.reddit.com/r/popular/top.json?t=day";

const count = 5;
let printArray = [];

let Reddit = new reddit(reddit_url);
let ProductHunt = new ph(5);

const print = async () => {
  let r_result = await Reddit.default(5);
  let ph_result = await ProductHunt.default(5);

  let result = r_result.join("\n") + "\n\n" + ph_result.join("\n");
  format(result);
};

print();

//Reddit.keyboard();

// TODO: Add posts from hacker news
