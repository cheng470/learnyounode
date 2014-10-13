var fs = require('fs');

var filePath = process.argv[2];
fs.readFile(filePath, function (err, buf) {
  if (err) throw err;
  var str = buf.toString();
  var arr = str.split("\n");
  console.log(arr.length > 0 ? arr.length - 1 : 0);
});