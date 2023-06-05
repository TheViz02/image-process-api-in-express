const express = require('express');
let router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
module.exports = router;
