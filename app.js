//REQUIRE EXPRESS 
const express = require('express')
const app = express();
const port = 3000;

//STATIC FILES 
app.use(express.static('public'))
app.use(express.static('views')) 

//SEND INDEX FILE
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//SERVER LISTENING ON 
app.listen(port, () => {
  console.log(` Server listening on port ${port}!`)
});