var express = require('express');

var app = express.createServer();

app.get('/', function(req, res) {
  'use strict';
  res.send('Hello World Dominatiozn@!!');
});





app.listen(process.env.port || 8089);

