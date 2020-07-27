var express = require('express');
var path = require('path');
//var open = require('open');

var port = 3000;
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})





