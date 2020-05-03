const fs = require("fs");

let curr_date = new Date();
curr_date = curr_date.toLocaleDateString().concat(" digest");

// Writes content String to file named current date
function format(content) {
  fs.writeFile(curr_date, content, (err) => {
    if (err) throw err;
    console.log(content);
    console.log("\n\nContent saved");
  });
}

module.exports = format;
