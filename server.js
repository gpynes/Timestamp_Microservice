// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// timestamp query parser
app.get('/:timestamp', function(request, response) {
  var query = request.params.timestamp;

  var date = new Date(+query * 1000 || query);

  var dateObj = {
    unix: date.getTime() / 1000,
    natural: Date.parse(date) ? date.toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric'}) : null
  };
  response.json(dateObj);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
