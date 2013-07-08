var express = require('express');

var app = express.createServer(express.logger());

var buffer;

fs = require('fs');

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  buffer = new Buffer(data,'utf8');
  //buffer.write(data.toString());
  console.log("data for index.html is:" + data);
});

app.get('/', function(request, response) {
  response.send(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
