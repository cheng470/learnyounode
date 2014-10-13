var fs = require('fs');

var filePath = process.argv[2];
var buf = fs.readFileSync(filePath);

var str = buf.toString();
var arr = str.split("\n");
console.log(arr.length > 0 ? arr.length - 1 : 0);