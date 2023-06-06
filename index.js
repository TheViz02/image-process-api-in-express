let express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path"),
  webRoutes = require("./routes/web"),
  apiRoutes = require("./routes/api"),
  port = 3001;

const app = express();

app.use(express.static(path.join(__dirname)));

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
