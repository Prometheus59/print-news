const fs = require("fs");

let curr_date = new Date();
curr_date = curr_date.toLocaleDateString().concat(" digest");

function format(content) {
  fs.appendFile(curr_date, content, (err) => {
    if (err) throw err;
    console.log("Content saved");
  });
}

module.exports = format;
