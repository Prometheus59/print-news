//const fetchReddit = require("./request/fetchReddit.js");
const reddit = require("./request/reddit");
const ph = require("./request/producthunt");
const makePDF = require("./compose/makePDF");
const format = require("./compose/format");
const reddit_url = "https://www.reddit.com/r/popular/top.json?t=day";

const count = 5;
let pdf_content = [];

let Reddit = new reddit(reddit_url);
let ProductHunt = new ph(5);

const print = async () => {
  let r_result = await Reddit.default(5);
  let ph_result = await ProductHunt.default(5);

  // ****  Old way of printing to file
  //let result = r_result.join("\n") + "\n\n" + ph_result.join("\n");
  //format(result);
  pdf_content.push(r_result.join("\n"))
  pdf_content.push(ph_result.join("\n"))

  makePDF(pdf_content);
};

print();


// TODO: Add posts from hacker news
