var express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

/**
 * Allow requests from ANY Origin
 */
app.use(cors());

var id = process.env.GITHUB_ID;
var secret = process.env.GITHUB_SECRET;

/**
 * Setups route to respond to GET requests for any URI
 */
app.get('/*', function (req, res) {
  /**
   * Grabs the URL with Query Parameters but without the Domain Name
   */
  var path = req.originalUrl;

  /**
   * Makes a request to the proxied API, adds an apiKey query param
   * pipes all traffic back as the HTTP response
   */
  request('https://api.github.com/' + path + '?client_id=' + id + '&client_secret=' + secret).pipe(res);
});

/**
 * Starts the Express app listening on a port of either the value of
 * an ENV variable called PORT or 3000 as a default
 *
 * The ENV variable PORT can be set by Heroku
 */
app.listen(process.env.PORT || 3000);
