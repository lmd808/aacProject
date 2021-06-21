const express = require('express')
const app = express();
const port = 3000;

//static files 
app.use(express.static('public'))
app.use(express.static('views')) 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(` Server listening on port ${port}!`)
});