const PDFDocument = require("pdfkit");
const fs = require("fs");

let curr_date = new Date();
let doc_name = curr_date.toLocaleDateString().split("/").join("-").concat(" digest.pdf");

function makePDF(content) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(doc_name));

  const col_x = 50;
  const col_y = 50;
  const col_width = 225;

  doc.fontSize(10).text(`${content[0]}`, col_x, col_y, {
    width: col_width,
    align: "left"
  });

  doc.fontSize(10).text(`${content[1]}`, col_x*2 + col_width, col_y, {
    width: col_width,
    align: "left",
    fontSize: 10
  });

  // Finalize the pdf file
  doc.end();
  console.log("PDF Completed\n");
}

//makePDF("test");

module.exports = makePDF;
