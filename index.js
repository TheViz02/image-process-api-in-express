let express = require('express')
  , multer = require('multer')
  , bodyParser = require('body-parser')
;

const upload = multer({
    dest:'images/'
});


const { imgProcess } = require('./execution');
let port = 3001;
const app = express();


app.get('/', (req, res)=>{
  res.json({
    message:"Hello World from JSON Response"
  })
});

app.post('/imgProcess', upload.single('image') ,imgProcess)


app.listen(port, ()=>{
  console.log(`Listening on localhost:${port}`)
})