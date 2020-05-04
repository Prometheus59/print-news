//const fetchReddit = require("./request/fetchReddit.js");
const reddit = require("./request/reddit");
const ph = require("./request/producthunt");
const makePDF = require("./compose/makePDF");
const format = require("./compose/format");


const count = 5;
let pdf_content = [];

let Reddit = new reddit(count);
let ProductHunt = new ph(count);

const print = async () => {
  console.log("Collecting Data");
  let r_result = await Reddit.til(5);
  let ph_result = await ProductHunt.default(5);

  // ****  Old way of printing to file
  //let result = r_result.join("\n") + "\n\n" + ph_result.join("\n");
  //format(result);
  console.log("Writing to PDF")
  pdf_content.push(r_result.join("\n"))
  pdf_content.push(ph_result.join("\n"))

  makePDF(pdf_content);
};

print();


/*
  TODO: Add posts from hacker news --> https://github.com/HackerNews/API
        Add comics from XKCD
        New word of the day?
        Stock information/Performance?
*/        
