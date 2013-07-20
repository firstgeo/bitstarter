var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var data = fs.readFileSync('index.html');
   respose.send(dataToString('utf-8'));
});
