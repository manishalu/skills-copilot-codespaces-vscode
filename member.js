// create  web server
// using express.js
var express = require('express');
var app = express();

// create a route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// bind the server to a port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});