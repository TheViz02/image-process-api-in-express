const Tesseract = require("tesseract.js");
const express = require("express"),
  fs = require("fs"),
  path = require("path");

const imgProcess = (req, res) => {
  console.log(req.file);

  let tempPath = req.file.path;
  let saveLoc = `./images/saveImage${path
    .extname(req.file.originalname)
    .toLowerCase()}`;

  fs.rename(tempPath, saveLoc, (err) => {
    if (err) console.log(err);
    console.log(tempPath, saveLoc);

    Tesseract.recognize(saveLoc, "eng", { logger: (m) => console.log(m) }).then(
      ({ data: { text } }) => {
        // console.log(text);
        res.json({
          message: "File Fetched",
          processResp: text,
        });
      }
    );
  });
};

/* Tesseract.recognize(
'C:/experiments/textExtractExample/samplePage.jpg',
'eng',
{ logger: m => console.log(m) })
.then(({ data: { text } }) => {
  console.log(text);
})
*/

module.exports = {
  imgProcess,
};
