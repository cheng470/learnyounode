var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  socket.write(strftime("%Y-%m-%d %H:%M"));
  socket.end();
});

var port = parseInt(process.argv[2], 10);
server.listen(port, function () {})