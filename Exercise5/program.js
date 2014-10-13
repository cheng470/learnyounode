var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var extension = process.argv[3];
fs.readdir(filePath, function (err, files) {
  if (err) throw err;
  files.forEach(function(file){
    if (path.extname(file).substring(1) === extension) {
      console.log(file);
    }
  });
  /*for (var i = 0, l = files.length; i < l; i++) {
    if (path.extname(files[i]).substring(1) === extension) {
      console.log(files[i]);
    }
  }*/
});