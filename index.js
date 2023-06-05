let express = require("express")
  , multer = require("multer")
  , bodyParser = require("body-parser")
  , path = require('path')
  , webRoutes = require('./routes/web');

const upload = multer({
  dest: "images/",
});

const app = express();

app.use(express.static(path.join(__dirname)));

const { imgProcess } = require("./execution");
let port = 3001;

app.use("/", webRoutes);

app.post("/imgProcess", upload.single("image"), imgProcess);

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
