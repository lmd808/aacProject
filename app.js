const express = require('express')
const app = express();
const port = 3000;

//static files 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use(express.static('public'))
app.use(express.static('views'))

app.listen(port, () => {
  console.log(` Server listening on port ${port}!`)
});