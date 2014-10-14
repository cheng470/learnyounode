var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function (req, resp) {
  // only POST requests
  if (req.method !== 'POST') { return ; }

  // converts incoming POST body characters to upper-case
  // and returns it to the client
  resp.writeHead(200, { 'content-type': 'text/plain' });
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(resp);
});

server.listen(Number(port));