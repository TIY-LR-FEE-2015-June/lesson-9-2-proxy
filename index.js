var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/*', function (req, res) {
  var path = req.originalUrl;

  request('http://addb.absolutdrinks.com/' + path + '?apiKey=23311a636eb84606a031b1292272666b').pipe(res);
});

app.listen(process.env.PORT || 3000);
