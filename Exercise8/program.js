var http = require('http'),
  bl = require('bl');

/*
the number of characters
the complete String of characters
*/
var url = process.argv[2];
http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});