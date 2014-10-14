var http = require('http');
var urlUtil = require('url');

// node -pe "require('url').parse('/test?q=1',true)"
var port = process.argv[2];
var server = http.createServer(function (req, resp) {
  var urlObj = urlUtil.parse(req.url, true);
  var isoTime = new Date(urlObj.query.iso);

  var obj = {};
  if (urlObj.pathname === "/api/parsetime") {
    // for "/api/parsetime"
    obj.hour = isoTime.getHours();
    obj.minute = isoTime.getMinutes();
    obj.second = isoTime.getSeconds();
  } else if (urlObj.pathname === "/api/unixtime") {
    // for "/api/unixtime"
    obj.unixtime = isoTime.getTime();
  }

  resp.writeHead(200, { 'Content-Type': 'application/json' });
  resp.end(JSON.stringify(obj));

});

server.listen(port);