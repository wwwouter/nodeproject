var express = require('express');

var app = express.createServer();

app.get('/', function(req, res) {
  'use strict';
  res.send('Hello World Dominatizozszn');
});


app.listen(process.env.port || 8089);

