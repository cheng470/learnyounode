var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (req, resp) {
  resp.writeHead(200, { 'content-type': 'text/plain' });
  var fileStream = fs.createReadStream(filePath);
  fileStream.pipe(resp);
});

server.listen(port);