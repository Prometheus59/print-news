const PDFDocument = require("pdfkit");
const fs = require("fs");

let curr_date = new Date();
let doc_name = curr_date.toLocaleDateString().concat(" digest.pdf");

function makePDF(content) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(doc_name));

  doc.fontSize(12).text(`${content[0]}`, 50, 50, {
    width: 225,
    alighn: "left",
  });

  doc.fontSize(10).text(`${content[1]}`, 325, 50, {
    width: 225,
    alighn: "right",
    fontSize: 10,
  });

  // Finalize the pdf file
  doc.end();
  console.log("PDF Completed\n");
}

//makePDF("test");

module.exports = makePDF;
