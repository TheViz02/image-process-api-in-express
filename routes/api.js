const express = require("express");
let { imgProcess } = require("../execution"),
  multer = require("multer");

const upload = multer({
  dest: "images/",
});

let router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query);
  res.json({
    message: "this is a index route of the api Endpoint",
  });
});

router.post("/imgProcess", upload.single("image"), imgProcess);

module.exports = router;
