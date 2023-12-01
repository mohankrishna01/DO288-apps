var express = require('express');
var fs = require('fs')
app = express();

// read in the APP_MSG env var
var msg = process.env.RESPONSE;

var response;

app.get('/', function (req, res) {
        //send the response to the client
        res.send(msg);
});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
