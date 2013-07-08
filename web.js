var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(1024);

fs = require('fs');

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buffer.write(data.toString());
  console.log("data for index.html is:" + data);
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8',0));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
